# Deployment — Portofolio Ady Budisantika

Workflow: `.github/workflows/deploy.yml`
Target: shared hosting via SSH
Trigger: push ke `production` (auto) atau `workflow_dispatch` (manual)

## Branch Strategy

- `main` → development / review.
- `production` → live hosting. Merge/push ke `production` = deploy.
- Server akan checkout branch `production` saat deploy.


## Alur

```
Local (agent) → commit/push ke main → GitHub Actions
  → test (PHP 8.2, composer, php artisan test)
  → SSH ke server
  → git fetch/reset origin/main
  → composer install (jika tersedia)
  → php artisan migrate --force
  → config:cache / route:cache / view:cache
  → storage:link
  → health check /up
```

## 1. Preflight di server (wajib)

Jalankan di server lewat SSH, lalu kirim output-nya (sensor nilai sensitif):

```bash
# cari lokasi project
find ~ -maxdepth 3 -name artisan -not -path '*/vendor/*'

cd /path/ke/portofolio
pwd
git rev-parse --show-toplevel 2>/dev/null || echo "BUKAN GIT REPO"
git remote -v
git branch --show-current

# cek public path
grep -E '^(APP_URL|APP_PUBLIC_PATH|DB_DATABASE)=' .env | sed 's/=.*/=***/'
ls -ld public public_html 2>/dev/null
readlink -f public_html 2>/dev/null

# cek runtime
php -v | head -2
composer --version 2>/dev/null || echo "composer tidak tersedia"
```

Yang perlu diketahui:
- `DEPLOY_PATH` = folder root Laravel (tempat `artisan`).
- Apakah folder itu **git checkout**? Workflow memakai `git fetch/reset`.
- Apakah document root `public` atau `public_html`?
- Apakah `APP_PUBLIC_PATH` dipakai?

Jika belum git checkout, lihat bagian **Initial server setup** di bawah.

## 2. Siapkan SSH key

Di lokal:

```bash
ssh-keygen -t ed25519 -C "github-actions-portfolio" -f ~/.ssh/portfolio_deploy
```

Tambahkan public key ke server:

```bash
ssh-copy-id -i ~/.ssh/portfolio_deploy.pub user@host
# atau paste isi portfolio_deploy.pub ke ~/.ssh/authorized_keys
```

Test:

```bash
ssh -i ~/.ssh/portfolio_deploy user@host "cd /path/ke/portofolio && pwd && git status -sb"
```

Isi private key (`~/.ssh/portfolio_deploy`) nanti dipasang sebagai secret `SSH_KEY`.

## 3. GitHub Secrets

Repo → Settings → Secrets and variables → Actions → New repository secret.

| Secret | Contoh / keterangan |
|---|---|
| `SSH_HOST` | host/IP server |
| `SSH_USER` | user SSH |
| `SSH_KEY` | isi private key `portfolio_deploy` |
| `SSH_PORT` | biasanya `22` |
| `DEPLOY_PATH` | `/home/adyn8949/portofolio` (root Laravel) |
| `PUBLIC_PATH` | `/home/adyn8949/public_html` (web root cPanel) |
| `SITE_URL` | `https://domain-portofolio.com` (tanpa slash di akhir) |

Jangan taruh nilai secret di file repo atau chat.

## 4. Initial server setup (sekali saja)

Jika folder project **belum** git checkout:

```bash
ssh user@host
cd ~
git clone https://github.com/adybudi/portofolio.git portofolio
cd portofolio
cp .env.example .env
# edit .env: APP_KEY, DB, APP_URL, APP_PUBLIC_PATH (jika perlu)
composer install --no-dev --optimize-autoloader
php artisan key:generate
php artisan migrate --force
php artisan storage:link
```

Jika project sudah live dan **bukan** git repo, jangan langsung `git init` di folder produksi tanpa backup. Opsi aman:
1. Backup folder + database.
2. Clone repo ke folder baru.
3. Copy `.env`, `storage/`, dan `public/uploads/` dari lama ke baru.
4. Arahkan document root ke folder baru.
5. Test, lalu hapus folder lama setelah yakin.

## 5. Deploy pertama

1. Commit & push workflow + perubahan kode ke `main`.
2. Buat branch production dari main:
   ```bash
   git checkout -b production
   git push -u origin production
   git checkout main
   ```
3. Buka GitHub → Actions → **Deploy Portfolio to Shared Hosting**.
4. Pilih branch `production` → **Run workflow**.
5. Pastikan job **Test** hijau, lalu **Deploy** hijau.
6. Cek health check `/up`.
7. Verifikasi manual:
   - homepage
   - `/services`
   - `/admin/login`
   - upload gambar di CMS
   - form kontak
8. Setelah manual deploy sukses, buka komentar trigger `push` di `deploy.yml`:
   ```yaml
   on:
     workflow_dispatch:
     push:
       branches: [production]
   ```
   Commit/push ke `production` → berikutnya auto-deploy saat merge/push ke production.


## 6. Akses untuk agent

Repo public: agent bisa membaca workflow/run lewat GitHub API tanpa token.

Untuk **trigger manual** dan **baca log detail**:
- `gh auth login` di mesin agent, atau
- fine-grained PAT:
  - `Actions: Read and write`
  - `Contents: Read` (atau `Read and write` jika agent boleh push)
  - `Workflows: Read and write` (jika agent boleh mengubah workflow)

Untuk update production, alur yang disarankan:
1. Agent ubah kode + test + build di lokal.
2. Kamu review & commit/push (atau agent push jika diberi izin).
3. GitHub Actions deploy otomatis.
4. Agent verifikasi `/up` + halaman live.

## 7. Rollback

Jika deploy gagal:

```bash
ssh user@host
cd /path/ke/portofolio
git log --oneline -5
git reset --hard <commit-sebelumnya>
php artisan optimize:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

Untuk database:
- restore backup sebelum migration, atau
- `php artisan migrate:rollback --step=1` jika migration terakhir aman di-rollback.

**Backup sebelum deploy pertama wajib:** database + `public/uploads` + `storage/app/public`.

## 8. Catatan penting

- `public/build` harus sudah di-build dan di-commit sebelum push. Workflow menolak deploy jika `public/build/manifest.json` tidak ada.
- `public/uploads` dan `storage/` tidak boleh dihapus oleh proses deploy. Workflow ini memakai `git reset --hard` (tidak menghapus file untracked), tetapi file yang **tracked** bisa tertimpa. Pastikan upload user tidak masuk git.
- **Struktur cPanel yang sudah dikonfirmasi:**
  - Project root: `/home/adyn8949/portofolio`
  - Web root: `/home/adyn8949/public_html`
  - `public_html` juga berisi folder project Seal (`seal.adybudi.my.id`, `daemon`, `cgi-bin`, `.well-known`). Workflow **tidak** menghapus folder-folder itu.
  - `public_html/index.php` dan `.htaccess` adalah file custom; workflow **tidak** menimpanya.
  - Setelah deploy, workflow menyalin `public/build` → `public_html/build` dan `public/uploads` → `public_html/uploads`.
  - Jika `public_html/build` atau `uploads` ternyata symlink, workflow skip copy (karena sudah menunjuk ke folder project).
- Jangan commit `.env`, database dump, atau kredensial.

