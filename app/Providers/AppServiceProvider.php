<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Http\Middleware\TrustHosts;
use Illuminate\Http\Middleware\TrustProxies;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Gate::define('manage-backup', function (User $user) {
            return (bool) $user->is_admin && (bool) $user->can_manage_backup;
        });

        $this->configureTrustedProxies();
        $this->configureTrustedHosts();
    }

    private function configureTrustedProxies(): void
    {
        $proxies = config('app.trusted_proxies');

        if (is_string($proxies)) {
            $proxies = trim($proxies);
        }

        if (empty($proxies)) {
            return;
        }

        TrustProxies::at($proxies === '*'
            ? '*'
            : array_map('trim', explode(',', (string) $proxies)));
    }

    private function configureTrustedHosts(): void
    {
        $configured = (string) config('app.trusted_hosts', '');
        $hosts = [];

        if (trim($configured) !== '') {
            $hosts = array_map('trim', explode(',', $configured));
        } else {
            $appHost = parse_url((string) config('app.url', ''), PHP_URL_HOST);

            if (is_string($appHost) && $appHost !== ''
                && !in_array($appHost, ['localhost', '127.0.0.1', '::1'], true)) {
                $hosts = [$appHost];
                $hosts[] = str_starts_with($appHost, 'www.')
                    ? substr($appHost, 4)
                    : 'www.'.$appHost;
            }
        }

        $patterns = [];

        foreach ($hosts as $host) {
            $host = strtolower(trim((string) $host));

            if ($host === '') {
                continue;
            }

            if (str_starts_with($host, '*.')) {
                $patterns[] = '^.+\.'.preg_quote(substr($host, 2), '/').'$';
            } else {
                $patterns[] = '^'.preg_quote($host, '/').'$';
            }
        }

        // Empty list = no host restriction (avoids breaking a misconfigured
        // APP_URL); otherwise only the configured hosts are accepted.
        TrustHosts::at($patterns, false);
    }
}
