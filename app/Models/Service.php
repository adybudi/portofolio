<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'price',
        'has_discount',
        'discount_price',
        'image',
        'features',
        'is_active',
        'order',
    ];

    protected $casts = [
        'features'      => 'array',
        'has_discount'  => 'boolean',
        'is_active'     => 'boolean',
        'price'         => 'decimal:2',
        'discount_price'=> 'decimal:2',
        'order'         => 'integer',
    ];
}
