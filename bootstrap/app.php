<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

$app = Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . "/../routes/web.php",
        commands: __DIR__ . "/../routes/console.php",
        health: "/up",
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->alias([
            "admin" => \App\Http\Middleware\EnsureUserIsAdmin::class,
            "backup.manage" =>
                \App\Http\Middleware\EnsureUserCanManageBackup::class,
        ]);

        $middleware->appendToGroup("web", [
            \App\Http\Middleware\SecurityHeaders::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })
    ->create();

// Arahkan path public ke public_html jika di hosting production (cPanel)
$customPublicPath = env('APP_PUBLIC_PATH');
if ($customPublicPath && !str_starts_with($customPublicPath, 'http://') && !str_starts_with($customPublicPath, 'https://')) {
    $resolvedPath = str_starts_with($customPublicPath, '/') ? $customPublicPath : dirname(__DIR__).'/'.$customPublicPath;
    if (is_dir($resolvedPath)) {
        $app->usePublicPath($resolvedPath);
    }
} elseif (is_dir(dirname(__DIR__).'/../public_html')) {
    $app->usePublicPath(dirname(__DIR__).'/../public_html');
} elseif (is_dir(dirname(__DIR__).'/public_html')) {
    $app->usePublicPath(dirname(__DIR__).'/public_html');
}

return $app;
