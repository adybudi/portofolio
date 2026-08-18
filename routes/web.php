<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\PortfolioController;
use App\Http\Controllers\Admin\ToolController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\ContactMessageController;
use App\Http\Controllers\Admin\ExperienceController;
use App\Http\Controllers\Admin\CertificationController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\BackupController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/products', [HomeController::class, 'products'])->name('products.index');
Route::get('/tools', [HomeController::class, 'tools'])->name('tools.index');
Route::get('/tools/{tool:slug}/launch', [HomeController::class, 'launchTool'])->name('tools.launch');
Route::get('/download-cv', [HomeController::class, 'downloadCv'])->name('cv.download');
Route::get('/services', [HomeController::class, 'services'])->name('services.index');
Route::post('/contact/send', [ContactController::class, 'store'])->middleware('throttle:5,1')->name('contact.send');

/*
|--------------------------------------------------------------------------
| Admin CMS Routes (Protected by Auth)
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    
    // CRUD Modules
    Route::resource('portfolios', PortfolioController::class);
    Route::resource('products', ProductController::class);
    Route::resource('services', ServiceController::class);
    Route::patch('services/{service}/toggle', [ServiceController::class, 'toggleStatus'])->name('services.toggle');
    Route::resource('tools', ToolController::class);
    Route::resource('experiences', ExperienceController::class)->except(['create', 'edit', 'show']);
    Route::resource('certifications', CertificationController::class)->except(['create', 'edit', 'show']);

    // Messages Inbox
    Route::get('/messages', [ContactMessageController::class, 'index'])->name('messages.index');
    Route::get('/messages/{message}', [ContactMessageController::class, 'show'])->name('messages.show');
    Route::delete('/messages/{message}', [ContactMessageController::class, 'destroy'])->name('messages.destroy');

    // Hardened Backup Export & Import Routes
    Route::middleware('backup.manage')->group(function () {
        Route::get('/backup/export', [BackupController::class, 'exportBackup'])->middleware('password.confirm')->name('backup.export');
        Route::post('/backup/preview', [BackupController::class, 'previewImport'])->name('backup.preview');
        Route::post('/backup/import', [BackupController::class, 'importBackup'])->name('backup.import');
    });

    // Settings & Hero Gallery Dedicated Routes
    Route::get('/settings', [SettingController::class, 'index'])->name('settings.index');
    Route::post('/settings', [SettingController::class, 'update'])->name('settings.update');
    Route::post('/settings/hero-photos', [SettingController::class, 'updateHeroPhotos'])->name('settings.hero_photos.update');
    Route::delete('/settings/hero-photos/{index}', [SettingController::class, 'deleteHeroPhoto'])->name('settings.hero_photos.delete');
});

// Alias for Laravel Breeze default auth tests
Route::get('/dashboard', function () {
    return redirect()->route('admin.dashboard');
})->middleware(['auth'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
