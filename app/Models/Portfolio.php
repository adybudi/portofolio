<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'image_path',
        'project_url',
        'category',
        'tech_stack',
        'is_featured',
    ];

    protected $casts = [
        'is_featured' => 'boolean',
    ];
}
