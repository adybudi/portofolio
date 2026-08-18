<?php

namespace Tests\Feature;

use App\Models\Tool;
use App\Models\User;
use App\Services\ImageUploadService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ToolTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed();
        Storage::fake('public');
    }

    public function test_visitor_can_view_tools_directory_page(): void
    {
        Tool::create([
            'name' => 'SQL Formatter Pro',
            'slug' => 'sql-formatter-pro',
            'category' => 'Developer Utility',
            'description' => 'Format query SQL otomatis dan rapi.',
            'url' => 'https://tools.example.com/sql-formatter',
            'is_active' => true,
            'clicks_count' => 5,
        ]);

        $response = $this->get(route('tools.index'));
        $response->assertStatus(200);
        $response->assertSee('SQL Formatter Pro');
        $response->assertSee('Format query SQL otomatis');
        $response->assertSee('Developer Utility');
    }

    public function test_visitor_can_launch_tool_and_increment_clicks(): void
    {
        $tool = Tool::create([
            'name' => 'Regex Tester',
            'slug' => 'regex-tester',
            'category' => 'Developer Utility',
            'description' => 'Test regular expressions in real-time.',
            'url' => 'https://tools.example.com/regex',
            'is_active' => true,
            'clicks_count' => 10,
        ]);

        $response = $this->get(route('tools.launch', $tool));
        $response->assertRedirect('https://tools.example.com/regex');
        $this->assertEquals(11, $tool->fresh()->clicks_count);
    }

    public function test_inactive_tool_returns_404_on_launch(): void
    {
        $tool = Tool::create([
            'name' => 'Draft Tool',
            'slug' => 'draft-tool',
            'category' => 'Developer Utility',
            'description' => 'Drafting tool.',
            'url' => 'https://tools.example.com/draft',
            'is_active' => false,
            'clicks_count' => 0,
        ]);

        $response = $this->get(route('tools.launch', $tool));
        $response->assertStatus(404);
    }

    public function test_invalid_url_tool_returns_400_on_launch(): void
    {
        $tool = Tool::create([
            'name' => 'Bad URL Tool',
            'slug' => 'bad-url-tool',
            'category' => 'Developer Utility',
            'description' => 'Bad url tool.',
            'url' => 'javascript:alert(1)',
            'is_active' => true,
            'clicks_count' => 0,
        ]);

        $response = $this->get(route('tools.launch', $tool));
        $response->assertStatus(400);
    }

    public function test_admin_can_crud_tools_with_icon_upload(): void
    {
        $admin = User::first();

        // 1. Create Tool
        $icon = UploadedFile::fake()->image('tool_icon.png', 100, 100);
        $response = $this->actingAs($admin)->post(route('admin.tools.store'), [
            'name' => 'Color Palette Generator',
            'category' => 'Design Tool',
            'description' => 'Generate vibrant color palettes instantly.',
            'url' => 'https://tools.example.com/palette',
            'icon' => $icon,
            'is_active' => '1',
        ]);

        $response->assertRedirect(route('admin.tools.index'));
        $this->assertDatabaseHas('tools', [
            'name' => 'Color Palette Generator',
            'category' => 'Design Tool',
        ]);

        $tool = Tool::where('name', 'Color Palette Generator')->first();
        $this->assertNotNull($tool->icon_path);
        Storage::disk('public')->assertExists($tool->icon_path);

        // 2. Edit Tool
        $newIcon = UploadedFile::fake()->image('new_icon.png', 120, 120);
        $oldPath = $tool->icon_path;

        $editResponse = $this->actingAs($admin)->put(route('admin.tools.update', $tool), [
            'name' => 'Color Palette Generator Pro',
            'category' => 'UI/UX Tool',
            'description' => 'Updated description.',
            'url' => 'https://tools.example.com/palette-pro',
            'icon' => $newIcon,
            'is_active' => '1',
        ]);

        $editResponse->assertRedirect(route('admin.tools.index'));
        $this->assertDatabaseHas('tools', [
            'id' => $tool->id,
            'name' => 'Color Palette Generator Pro',
            'category' => 'UI/UX Tool',
        ]);

        Storage::disk('public')->assertMissing($oldPath);
        $tool->refresh();
        Storage::disk('public')->assertExists($tool->icon_path);

        // 3. Delete Tool
        $deletedPath = $tool->icon_path;
        $deleteResponse = $this->actingAs($admin)->delete(route('admin.tools.destroy', $tool));
        $deleteResponse->assertRedirect(route('admin.tools.index'));
        $this->assertDatabaseMissing('tools', ['id' => $tool->id]);
        Storage::disk('public')->assertMissing($deletedPath);
    }

    public function test_non_admin_cannot_access_admin_tools(): void
    {
        $regularUser = User::create([
            'name' => 'Regular User',
            'email' => 'user_tools@example.com',
            'password' => Hash::make('password123'),
            'is_admin' => false,
        ]);

        $response = $this->actingAs($regularUser)->get(route('admin.tools.index'));
        $response->assertStatus(403);
    }
}
