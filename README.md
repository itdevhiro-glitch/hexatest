# Hexaria VTuber Agency Prototype v5

Rangka web statis HTML/CSS/JS modular untuk Hexaria.

## Struktur penting
- `index.html` = loading gate / bisa jadi maintenance gate.
- `home.html` = landing page utama.
- `profile.html?id=slug-talent` = profile dinamis tiap talent.
- `assets/js/data.js` = semua data talent, schedule, maintenance config.
- `assets/js/app.js` = render talent, schedule, profile, nav.
- `assets/css/style.css` = style global dan base layout.
- `assets/css/talents/*.css` = CSS khusus tiap talent.

## Talent theme system
Setiap talent punya CSS sendiri, bukan cuma beda banner:
- `lumiere.css` = violet cathedral / gothic elegant.
- `daiki.css` = wolf moon night / silver dark.
- `reynala.css` = raven oracle / dark purple mystery.
- `yura.css` = amber archer / dusk castle.
- `kazuurie.css` = dreamwing / bright sky palace.
- `vyn.css` = golden trickster / sunny chaos.

Bentuk card/profile tetap konsisten, tapi warna, font, pattern, symbol, glow, dan mood tiap talent berbeda.

## Maintenance mode
Buka `assets/js/data.js`, ubah:
```js
maintenance: true
```
Maka `index.html` akan menahan user di loading/maintenance gate.

## Hosting
Siap upload ke GitHub Pages atau Hostinger static hosting.


## Update v5
- Banner utama landing page sudah diganti ke asset terbaru yang dikirim user.
- Cache query dinaikkan ke `?v=5` supaya browser tidak nahan asset lama.
