---
name: laravel-portfolio-conventions
description: Rules and coding standards for the Laravel Portfolio project
trigger: always_on
---

# Laravel Portfolio Coding Rules & Conventions

## 1. Security & Authorization Scoping
- Public routes must be placed in `routes/web.php` under public route definitions.
- Admin CMS routes MUST be grouped under prefix `admin` and middleware `['auth', 'admin']`.
- Backup export/import routes MUST use `backup.manage` middleware & check `manage-backup` Gate.
- Public registration is disabled by default (`enable_public_registration = 0`) and strictly forced disabled in production. Admin users must be created via CLI: `php artisan admin:create`.
- Contact form submissions must enforce honeypot anti-spam (`hp_time`, `hp_check`) and rate limiting `throttle:5,1`.
- HTTP Security Headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Content-Security-Policy`, `HSTS`) are enforced via `SecurityHeaders` middleware.

## 2. File Upload & Storage Guidelines
- All image uploads MUST use `ImageUploadService::store($file, $subdir)` on `Storage::disk('public')`.
- Upload filenames MUST be server-side random UUIDs (`Str::uuid()`). Never use original client filenames.
- Forbidden file types (PHP, HTML, JS, SVG, scripts) and fake MIMEs are strictly rejected via GD content inspection (`getimagesize()`).
- On update: upload new file first, save to DB, then delete old file via `ImageUploadService::delete($oldPath)`.
- On delete: delete database record first, then safely delete associated file via `ImageUploadService::delete()`.
- Display uploaded files using `uploaded_asset($path)` helper to ensure automatic storage resolution and fallback handling.

## 3. Frontend & Styling Guidelines
- Styling uses Tailwind CSS combined with DaisyUI 5 and custom CSS variables defined in `resources/css/app.css` (e.g. `--blue-green`, `html[data-theme="light"]`, `html[data-theme="dark"]`).
- Dynamic themes rely on `data-theme` attribute and `dark` class toggling. Maintain both light and dark editorial themes.
- Form inputs must use `.input-theme` class for consistent styling across light/dark modes.

## 4. CMS Modules & Landing Page Toggles
- Every CMS module (Portfolios, Products, Tools, Experiences, Certifications, Galleries) must follow resource controllers pattern under `App\Http\Controllers\Admin\*`.
- Every landing page section must have a dynamic visibility toggle setting (`show_{section}_section`) manageable in Admin CMS Settings (`SettingController`, `admin.settings.index`, and `home.blade.php`).

## 5. Deployment & Testing Standard
- Production deployment commands:
  ```bash
  composer install --no-dev --optimize-autoloader
  php artisan config:cache
  php artisan route:cache
  php artisan view:cache
  php artisan storage:link
  npm run build
  ```
- Before finalizing any task or committing changes, run `php artisan test`. All tests must pass cleanly (100% success rate).
