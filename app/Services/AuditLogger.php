<?php

namespace App\Services;

use Illuminate\Support\Facades\Log;

class AuditLogger
{
    /**
     * Log backup security events with user, IP, user agent, timestamp, and status.
     */
    public static function logBackupActivity(string $action, string $status, array $details = []): void
    {
        $user = auth()->user();

        $context = [
            'action' => $action,
            'status' => $status,
            'user_id' => $user?->id,
            'user_email' => $user?->email,
            'ip_address' => request()->ip(),
            'user_agent' => request()->userAgent(),
            'timestamp' => now()->toIso8601String(),
            'details' => $details,
        ];

        if ($status === 'success') {
            Log::info("AUDIT_LOG: Backup {$action} succeeded", $context);
        } else {
            Log::warning("AUDIT_LOG: Backup {$action} failed", $context);
        }
    }
}
