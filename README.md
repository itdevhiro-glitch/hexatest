# Hexaria VTuber Agency Website Prototype

Static modular HTML/CSS/JS prototype. Upload all files to GitHub Pages or Hostinger public_html.

## Maintenance Mode
Open `assets/js/data.js`, change:

```js
maintenance: false
```

to:

```js
maintenance: true
```

The loading gate will stop visitors and show the maintenance message.

## Next Integration
- Firebase Auth for admin
- Firebase Realtime Database / Firestore for talents, news, schedules, auditions
- Replace placeholder SVG talent art with official assets

Update: hero image sudah diganti ke `assets/img/talent-destiny-banner.png`. Card talent sekarang memakai tema CSS berbeda per talent sebagai placeholder sampai banner official masing-masing tersedia.
