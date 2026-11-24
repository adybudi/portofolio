<?php

namespace Tests\Feature;

use App\Models\Tool;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PhaseASecurityTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed();
    }

    public function test_admin_tools_show_route_is_not_exposed(): void
    {
        $admin = User::first();

        $tool = Tool::create([
            'name' => 'Throttle Probe Tool',
            'slug' => 'throttle-probe-tool',
            'description' => 'Probe',
            'url' => 'https://example.com',
            'category' => 'Developer Utility',
            'is_active' => true,
        ]);

        $this->actingAs($admin)
            ->get("/admin/tools/{$tool->id}")
            ->assertStatus(405);
    }

    public function test_download_cv_is_rate_limited(): void
    {
        for ($i = 0; $i < 15; $i++) {
            $this->get(route('cv.download'));
        }

        $this->get(route('cv.download'))->assertStatus(429);
    }

    public function test_tool_launch_is_rate_limited(): void
    {
        $tool = Tool::create([
            'name' => 'Launch Probe Tool',
            'slug' => 'launch-probe-tool',
            'description' => 'Probe',
            'url' => 'https://example.com',
            'category' => 'Developer Utility',
            'is_active' => true,
        ]);

        for ($i = 0; $i < 30; $i++) {
            $this->get(route('tools.launch', $tool));
        }

        $this->get(route('tools.launch', $tool))->assertStatus(429);
    }

    public function test_forgot_password_is_rate_limited(): void
    {
        for ($i = 0; $i < 5; $i++) {
            $this->post(route('password.email'), ['email' => 'nobody@example.com']);
        }

        $this->post(route('password.email'), ['email' => 'nobody@example.com'])->assertStatus(429);
    }

    public function test_confirm_password_is_rate_limited(): void
    {
        $user = User::factory()->create();

        for ($i = 0; $i < 6; $i++) {
            $this->actingAs($user)->post('/confirm-password', ['password' => 'wrong-password']);
        }

        $this->actingAs($user)
            ->post('/confirm-password', ['password' => 'wrong-password'])
            ->assertStatus(429);
    }

    public function test_backup_import_is_rate_limited(): void
    {
        $admin = User::first();

        for ($i = 0; $i < 5; $i++) {
            $this->actingAs($admin)->post(route('admin.backup.import'), ['password' => 'password']);
        }

        $this->actingAs($admin)
            ->post(route('admin.backup.import'), ['password' => 'password'])
            ->assertStatus(429);
    }

    public function test_uploads_directory_blocks_script_execution(): void
    {
        $path = public_path('uploads/.htaccess');

        $this->assertFileExists($path);

        $contents = (string) file_get_contents($path);

        $this->assertStringContainsString('Require all denied', $contents);
        $this->assertStringContainsString('RemoveHandler', $contents);
        $this->assertStringContainsString('Options -Indexes', $contents);
    }
}
