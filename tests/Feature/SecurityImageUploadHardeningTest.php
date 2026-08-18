<?php

namespace Tests\Feature;

use App\Models\Service;
use App\Models\User;
use App\Services\ImageUploadService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class SecurityImageUploadHardeningTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed();
        Storage::fake('public');
    }

    public function test_valid_jpeg_png_webp_upload_succeeds(): void
    {
        $admin = User::first();

        $jpgFile = UploadedFile::fake()->image('photo.jpg', 800, 600);
        $resJpg = $this->actingAs($admin)->post(route('admin.services.store'), [
            'title' => 'Valid JPG Service',
            'image' => $jpgFile,
        ]);
        $resJpg->assertRedirect(route('admin.services.index'));

        $pngFile = UploadedFile::fake()->image('photo.png', 800, 600);
        $resPng = $this->actingAs($admin)->post(route('admin.services.store'), [
            'title' => 'Valid PNG Service',
            'image' => $pngFile,
        ]);
        $resPng->assertRedirect(route('admin.services.index'));

        $webpFile = UploadedFile::fake()->image('photo.webp', 800, 600);
        $resWebp = $this->actingAs($admin)->post(route('admin.services.store'), [
            'title' => 'Valid WebP Service',
            'image' => $webpFile,
        ]);
        $resWebp->assertRedirect(route('admin.services.index'));

        $this->assertDatabaseHas('services', ['title' => 'Valid JPG Service']);
        $this->assertDatabaseHas('services', ['title' => 'Valid PNG Service']);
        $this->assertDatabaseHas('services', ['title' => 'Valid WebP Service']);
    }

    public function test_svg_upload_is_rejected(): void
    {
        $admin = User::first();

        $svgFile = UploadedFile::fake()->createWithContent('malicious.svg', '<svg xmlns="http://www.w3.org/2000/svg"><script>alert(1)</script></svg>');

        $response = $this->actingAs($admin)->post(route('admin.services.store'), [
            'title' => 'SVG Attack',
            'image' => $svgFile,
        ]);

        $response->assertSessionHasErrors('image');
    }

    public function test_php_html_js_upload_is_rejected(): void
    {
        $admin = User::first();

        $phpFile = UploadedFile::fake()->createWithContent('webshell.php', '<?php system($_GET["cmd"]); ?>');
        $resPhp = $this->actingAs($admin)->post(route('admin.services.store'), [
            'title' => 'PHP Shell',
            'image' => $phpFile,
        ]);
        $resPhp->assertSessionHasErrors('image');

        $htmlFile = UploadedFile::fake()->createWithContent('xss.html', '<script>alert("XSS")</script>');
        $resHtml = $this->actingAs($admin)->post(route('admin.services.store'), [
            'title' => 'HTML File',
            'image' => $htmlFile,
        ]);
        $resHtml->assertSessionHasErrors('image');
    }

    public function test_fake_mime_file_is_rejected(): void
    {
        $admin = User::first();

        // Create executable content with .jpg extension
        $fakeFile = UploadedFile::fake()->createWithContent('fake.jpg', '<?php echo "fake image"; ?>');

        $response = $this->actingAs($admin)->post(route('admin.services.store'), [
            'title' => 'Fake Image',
            'image' => $fakeFile,
        ]);

        $response->assertSessionHasErrors('image');
    }

    public function test_oversized_file_is_rejected(): void
    {
        $admin = User::first();

        // 6MB image (> 5120 KB limit)
        $largeFile = UploadedFile::fake()->image('large.jpg')->size(6144);

        $response = $this->actingAs($admin)->post(route('admin.services.store'), [
            'title' => 'Large Photo',
            'image' => $largeFile,
        ]);

        $response->assertSessionHasErrors('image');
    }

    public function test_invalid_dimensions_are_rejected(): void
    {
        $admin = User::first();

        // 2x2 image (< 10px min dimension limit)
        $tinyFile = UploadedFile::fake()->image('tiny.jpg', 2, 2);

        $response = $this->actingAs($admin)->post(route('admin.services.store'), [
            'title' => 'Tiny Photo',
            'image' => $tinyFile,
        ]);

        $response->assertSessionHasErrors('image');
    }

    public function test_old_file_is_deleted_on_update(): void
    {
        $admin = User::first();

        $initialFile = UploadedFile::fake()->image('initial.jpg', 400, 300);
        $initialPath = ImageUploadService::store($initialFile, 'services');
        Storage::disk('public')->assertExists($initialPath);

        $service = Service::create([
            'title' => 'Initial Title',
            'slug' => 'initial-title-slug',
            'image' => $initialPath,
            'is_active' => true,
        ]);

        $newFile = UploadedFile::fake()->image('new.jpg', 500, 400);
        $updateRes = $this->actingAs($admin)->put(route('admin.services.update', $service), [
            'title' => 'Updated Title',
            'image' => $newFile,
        ]);

        $updateRes->assertRedirect(route('admin.services.index'));

        // Old file must be deleted from storage
        Storage::disk('public')->assertMissing($initialPath);

        $service->refresh();
        Storage::disk('public')->assertExists($service->image);
    }

    public function test_file_is_deleted_when_record_is_deleted(): void
    {
        $admin = User::first();

        $file = UploadedFile::fake()->image('to_delete.jpg', 400, 300);
        $filePath = ImageUploadService::store($file, 'services');
        Storage::disk('public')->assertExists($filePath);

        $service = Service::create([
            'title' => 'Service To Delete',
            'slug' => 'service-to-delete-slug',
            'image' => $filePath,
            'is_active' => true,
        ]);

        $deleteRes = $this->actingAs($admin)->delete(route('admin.services.destroy', $service));
        $deleteRes->assertRedirect(route('admin.services.index'));

        // File must be deleted when record is deleted
        Storage::disk('public')->assertMissing($filePath);
    }

    public function test_upload_path_does_not_escape_intended_directory(): void
    {
        $file = UploadedFile::fake()->image('test.jpg', 200, 200);
        $path = ImageUploadService::store($file, '../../etc');

        // Cleaned subdir should sanitize directory traversal attempt
        $this->assertStringStartsWith('uploads/etc/', $path);
        $this->assertStringNotContainsString('..', $path);
    }

    public function test_image_upload_service_update_method_deletes_old_file(): void
    {
        $oldFile = UploadedFile::fake()->image('old.jpg', 300, 300);
        $oldPath = ImageUploadService::store($oldFile, 'test');
        Storage::disk('public')->assertExists($oldPath);

        $newFile = UploadedFile::fake()->image('new.jpg', 400, 400);
        $newPath = ImageUploadService::update($newFile, 'test', $oldPath);

        $this->assertNotNull($newPath);
        $this->assertNotEquals($oldPath, $newPath);
        Storage::disk('public')->assertExists($newPath);
        Storage::disk('public')->assertMissing($oldPath);

        // When new file is null, it should keep the existing path without deleting it
        $keptPath = ImageUploadService::update(null, 'test', $newPath);
        $this->assertEquals($newPath, $keptPath);
        Storage::disk('public')->assertExists($newPath);
    }

    public function test_portfolio_update_cleans_up_old_image(): void
    {
        $admin = User::first();
        $oldFile = UploadedFile::fake()->image('old_portfolio.jpg', 400, 400);
        $oldPath = ImageUploadService::store($oldFile, 'portfolios');

        $portfolio = \App\Models\Portfolio::create([
            'title' => 'Project A',
            'slug' => 'project-a',
            'category' => 'Web App',
            'description' => 'Description A',
            'image_path' => $oldPath,
        ]);

        $newFile = UploadedFile::fake()->image('new_portfolio.jpg', 500, 500);
        $this->actingAs($admin)->put(route('admin.portfolios.update', $portfolio), [
            'title' => 'Project A Updated',
            'category' => 'Web App',
            'description' => 'Description A',
            'image' => $newFile,
        ]);

        Storage::disk('public')->assertMissing($oldPath);
        $portfolio->refresh();
        Storage::disk('public')->assertExists($portfolio->image_path);
    }

    public function test_product_and_tool_update_cleans_up_old_images(): void
    {
        $admin = User::first();

        // Product test
        $oldProductImg = UploadedFile::fake()->image('old_prod.jpg', 300, 300);
        $oldProdPath = ImageUploadService::store($oldProductImg, 'products');
        $product = \App\Models\Product::create([
            'title' => 'Product A',
            'slug' => 'product-a',
            'image_path' => $oldProdPath,
        ]);

        $newProdImg = UploadedFile::fake()->image('new_prod.jpg', 400, 400);
        $this->actingAs($admin)->put(route('admin.products.update', $product), [
            'title' => 'Product A Updated',
            'image' => $newProdImg,
        ]);
        Storage::disk('public')->assertMissing($oldProdPath);

        // Tool test
        $oldToolIcon = UploadedFile::fake()->image('old_icon.jpg', 100, 100);
        $oldToolPath = ImageUploadService::store($oldToolIcon, 'tools');
        $tool = \App\Models\Tool::create([
            'name' => 'Tool A',
            'slug' => 'tool-a',
            'category' => 'Utility',
            'description' => 'Tool Description',
            'url' => 'https://example.com/tool',
            'icon_path' => $oldToolPath,
        ]);

        $newToolIcon = UploadedFile::fake()->image('new_icon.jpg', 120, 120);
        $this->actingAs($admin)->put(route('admin.tools.update', $tool), [
            'name' => 'Tool A Updated',
            'category' => 'Utility',
            'description' => 'Tool Description',
            'url' => 'https://example.com/tool',
            'icon' => $newToolIcon,
        ]);
        Storage::disk('public')->assertMissing($oldToolPath);
    }
}
