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

    public function test_non_admin_user_cannot_upload_file(): void
    {
        $regularUser = User::create([
            'name' => 'Regular User',
            'email' => 'regular_user@example.com',
            'password' => Hash::make('password123'),
            'is_admin' => false,
        ]);

        $file = UploadedFile::fake()->image('photo.jpg', 400, 300);
        $response = $this->actingAs($regularUser)->post(route('admin.services.store'), [
            'title' => 'Unauthorized Upload',
            'image' => $file,
        ]);

        $response->assertStatus(403);
    }
}
