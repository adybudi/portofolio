<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Admin Seeding
    |--------------------------------------------------------------------------
    |
    | Controls the optional admin account created by DatabaseSeeder. When no
    | password is configured, the seeder skips the account on non-test
    | environments so a weak default credential never reaches production.
    | Use `php artisan admin:create` for interactive creation.
    |
    */

    'seed_admin_email' => env('ADMIN_SEED_EMAIL', 'admin@adybudi.com'),

    'seed_admin_password' => env('ADMIN_SEED_PASSWORD'),

];
