# Personal Links

Halaman link-in-bio statis milik Muhammad Daffa Ashdaqfillah, siap untuk GitHub Pages.

## Mengisi tautan

Buka `links.js` untuk memperbarui URL di dalam objek `profileLinks`:

```js
const profileLinks = {
  linkedin: "https://www.linkedin.com/in/daf2a/",
  website: "https://www.daf2a.com/",
  portfolio: "https://www.daf2a.com/portfolio/?sort=date-desc",
  github: "https://github.com/daf2a",
  instagram: "https://www.instagram.com/daf2a_/",
};
```

## Menjalankan secara lokal

```bash
python3 -m http.server 8000
```

Kemudian buka `http://localhost:8000`.

## Publikasi ke `daf2a.com/links`

1. Buat repository GitHub bernama `links` pada akun `daf2a`.
2. Push seluruh isi folder ini ke branch `main`.
3. Di repository tersebut, buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **GitHub Actions** sebagai sumber.

Workflow `.github/workflows/deploy.yml` akan otomatis menerbitkan situs setiap kali ada push ke `main`. GitHub Pages project site-nya berada di:

```text
https://daf2a.github.io/links/
```

Karena user site `daf2a.github.io` sudah memakai custom domain `daf2a.com`, GitHub Pages akan menerapkan domain yang sama pada project site milik akun tersebut. URL publik repository `links` menjadi:

```text
https://daf2a.com/links/
```

Repository ini sengaja tidak memiliki file `CNAME`. Jangan isi custom domain lagi di pengaturan Pages repository `links`. Custom domain `daf2a.com` tetap dikelola oleh user site utama, sedangkan repository ini diterbitkan sebagai project site pada subpath `/links/`.
