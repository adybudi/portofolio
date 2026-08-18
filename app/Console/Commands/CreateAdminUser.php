<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class CreateAdminUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'admin:create
                            {--name= : Nama lengkap administrator}
                            {--email= : Alamat email administrator}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Membuat akun pengguna administrator baru secara aman';

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        $name = $this->option('name');
        if (empty($name)) {
            $name = $this->ask('Masukkan nama lengkap admin');
        }

        if (empty(trim((string) $name))) {
            $this->error('Nama tidak boleh kosong.');
            return self::FAILURE;
        }

        $email = $this->option('email');
        if (empty($email)) {
            $email = $this->ask('Masukkan email admin');
        }

        $email = strtolower(trim((string) $email));

        $validator = Validator::make(['email' => $email], [
            'email' => ['required', 'string', 'email', 'max:255'],
        ]);

        if ($validator->fails()) {
            $this->error($validator->errors()->first('email'));
            return self::FAILURE;
        }

        if (User::where('email', $email)->exists()) {
            $this->error("Email [{$email}] sudah terdaftar dalam sistem.");
            return self::FAILURE;
        }

        $password = $this->secret('Masukkan password admin');
        if (empty($password)) {
            $this->error('Password tidak boleh kosong.');
            return self::FAILURE;
        }

        if (strlen($password) < 8) {
            $this->error('Password harus memiliki minimal 8 karakter.');
            return self::FAILURE;
        }

        $confirmPassword = $this->secret('Konfirmasi password admin');
        if ($password !== $confirmPassword) {
            $this->error('Konfirmasi password tidak cocok.');
            return self::FAILURE;
        }

        $user = new User();
        $user->name = trim((string) $name);
        $user->email = $email;
        $user->password = Hash::make($password);
        $user->is_admin = true;
        $user->can_manage_backup = true;
        $user->email_verified_at = now();
        $user->save();

        $this->info("Akun admin [{$user->email}] berhasil dibuat!");

        return self::SUCCESS;
    }
}
