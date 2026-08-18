<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Tool extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'description',
        'icon_path',
        'url',
        'category',
        'is_active',
        'clicks_count',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'clicks_count' => 'integer',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($tool) {
            if (empty($tool->slug)) {
                $tool->slug = Str::slug($tool->name);
            }
        });
    }
}
