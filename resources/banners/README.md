# Banner Layanan

Sumber desain banner untuk halaman **Jasa & Layanan** dan kartu layanan di landing page.

## Asset Aktif

| File | Ukuran | Dipakai |
|---|---|---|
| `public/uploads/services/service-landing-page-banner-a.webp` | 1600 × 901 | ✅ Layanan `Landing Page / Company Profile` |
| `public/uploads/services/service-landing-page-banner-b.webp` | 1600 × 900 | Alternatif |
| `public/uploads/services/service-landing-page-banner-c.webp` | 1600 × 900 | Alternatif light |
| `public/uploads/services/services-hero-banner.webp` | 1600 × 676 | Alternatif hero halaman Jasa |

### Cover Portofolio

| File | Proyek |
|---|---|
| `public/uploads/portfolios/project-ecommerce.webp` | Enterprise E-Commerce Engine |
| `public/uploads/portfolios/project-dashboard.webp` | Dashboard Analitik & Tools AI |
| `public/uploads/portfolios/project-saas.webp` | SaaS Hub Manajemen Proyek |
| `public/uploads/portfolios/project-api.webp` | Gateway RESTful API & OAuth |

## Sumber HTML

- `landing-page-banner-a.html` — editorial + browser mockup (aktif)
- `landing-page-banner-b.html` — tipografi + nomor besar
- `landing-page-banner-c.html` — light editorial
- `services-hero-banner.html` — hero Jasa & Layanan
- `portfolio-banner-template.html` — template cover portofolio (query `?project=ecommerce|dashboard|saas|api`)
- `banner-board.html` — papan perbandingan banner layanan (gambar embed base64)
- `portfolio-board.html` — papan perbandingan cover portofolio (gambar embed base64)

## Cara Render Ulang

1. Buka file HTML di browser pada viewport 1280 px.
2. Screenshot area banner:
   - A/B/C: 1280 × 720 (16:9)
   - Hero: 1280 × 540
3. Konversi ke WebP:
   ```bash
   cwebp -q 88 -m 6 -resize 1600 0 input.png -o public/uploads/services/output.webp
   ```
4. Untuk mengganti banner layanan, update kolom `services.image` melalui CMS
   (Admin → Jasa → Edit) atau sinkronkan path-nya.

## Catatan Desain

- Palet: navy `#0b0f17`, cyan `#0096c7` / `#48cae4`, slate `#94a3b8`.
- Tipografi: Bebas Neue (display), Plus Jakarta Sans (body).
- Tidak memakai foto stok atau screenshot project lain.
- Banner A menggunakan `object-contain` di kartu featured agar seluruh komposisi terlihat.
