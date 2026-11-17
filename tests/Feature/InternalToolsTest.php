<?php

namespace Tests\Feature;

use App\Models\Tool;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class InternalToolsTest extends TestCase
{
    use RefreshDatabase;

    public function test_tools_hub_lists_the_internal_tools(): void
    {
        $response = $this->get(route('tools.index'));

        $response->assertOk();
        $response->assertSee('Merge PDF');
        $response->assertSee('Image Compressor');
        $response->assertSee(route('tools.merge-pdf'), false);
        $response->assertSee(route('tools.compress-image'), false);
    }

    public function test_merge_pdf_page_is_available(): void
    {
        $response = $this->get(route('tools.merge-pdf'));

        $response->assertOk();
        $response->assertSee('MERGE PDF');
        $response->assertSee('data-tool="merge-pdf"', false);
        $response->assertSee('id="merge-pdf-input"', false);
    }

    public function test_compress_image_page_is_available(): void
    {
        $response = $this->get(route('tools.compress-image'));

        $response->assertOk();
        $response->assertSee('IMAGE COMPRESSOR');
        $response->assertSee('data-tool="compress-image"', false);
        $response->assertSee('id="ci-input"', false);
    }

    public function test_inactive_external_tools_are_not_listed(): void
    {
        Tool::create([
            'name' => 'External Secret Tool',
            'slug' => 'external-secret-tool',
            'description' => 'Should not be visible',
            'url' => 'https://example.com',
            'category' => 'External',
            'is_active' => false,
        ]);

        $response = $this->get(route('tools.index'));

        $response->assertOk();
        $response->assertDontSee('External Secret Tool');
    }

    public function test_sitemap_lists_the_internal_tools(): void
    {
        $response = $this->get(route('sitemap'));

        $response->assertOk();
        $response->assertSee(route('tools.merge-pdf'), false);
        $response->assertSee(route('tools.compress-image'), false);
    }
}
