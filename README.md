# CRUD with Javascript + EJS

Assalamualaikum semuanya, ini salah satu project copyright saya dari bang [Dea Afrizal](https://www.youtube.com/@deaafrizal) 😘✌️

Kalau begitu, yuk ikutin bagaimana cara membuatnya :

# Cara instalasi
- pertama, kalian harus menginstall dulu `Node.js, MySql, XAMPP` di komputer atau laptop kalian
  - 🎯 Node.js = (https://nodejs.org/en/download)
  - 🎯 MySql = (https://www.mysql.com/downloads/)
  - 🎯 XAMPP = (https://www.apachefriends.org/download.html)

  
- Kedua, setelah kalian menginstall ketiga itu, kalian buat folder untuk tempat file ngoding kalian. Setelah membuat itu, kalian buka folder itu di text editor kalian, kalo aku di `vscode`. Setelah di vscode nya, kalian buka `terminal` vscodenya, lalu ketikkan
```bash
npm init -y 
```
setelah kalian `npm init -y` di folder kalian muncul file `package.json`. Seetelah itu buat file lagi, namanya `server.js`

- Ketiga, kalau sudah, kalian nyalakan dulu XAMPP nya, setelah dinyalakan kalian ke browser kalian, kalo aku di `Microsoft edge`, lalu ketikkan `localhost/phpmyadmin/`. Setelah itu buat satu database

- Keempat, kembali ke `vscode` lalu ketikka kode seperti ini di file server.js
```bash
const express = require("express");
const mysql = require("mysql");

const app = express();

app.get("/", (req, res) => {
  res.send("OK ROUTE OPEN");
})

app.listen(8000, () => {
  console.log("server ready..")
})

// port 8000 bisa kalian custom semau kalian, tidak harus 8000
```
setelah dibuat lalu, kalian ketikkan di terminal teks editor kalian `$ node server.js`, kalian ke browser kalian tadi, lalu buka tab baru, ketikkan `localhost:8000`
```bash
const express = require("express");
const mysql = require("mysql");

const app = express();

const db = muysql.createConnection({
  host: "localhost",
  database: "(nama db kalian)"
  user: "root"
  password: "" 
})

db.connect((err) => {
  if (err) throw err
  console.log("database connected..");
  app.get("/", (req, res) => {
    res.send("OK ROUTE OPEN")
  })
})

app.listen(8000, () => {
  console.log("server ready..")
})
```
lalu kalian jalankan lagi seperti tadi.

- Kelima, kalian install `ejs` nya :
```bash
npm i ejs
```
setelah kalian install `ejs`, kalian perlu install nodemon juga
```bash
npm i -g nodemon
```
setelah itu, kalia bisa ngecek apakah sudah terinstall atau belum nodemon kalian :
```bash
nodemon -v
```

- Ketujuh, Setelah diinstall kalian perlu membuat satu folder lagi dan satu file : `views\index.ejs`

- Kedelapan, untuk styling nya kalian bisa memakai libary css, salah satunya `bootstrap`. Kalian bisa mengekstrak dengan cara
```bash
https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css
```
```bash
https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js
```
Link ini ditaro di file index.ejs

*Setelah ini, kalian bisa melihat tutorialnya di youtube bang Dea : https://youtu.be/JmwDuKzbkNA?si=K7CGAg8oYnBP6RRx*



## Dapetin Apikey dari firebase

Kalian udah pernah denger Firebase? kalau belum Firebase itu adalah layanan cloud API yang menyediakan serverless function yang memudahkan Bagi developer, Berikut tutorial nya:
- kalian masuk ke website [Firebase](https://firebase.google.com/?hl=id)
- Kalau udah kalian buat Project kalian seterah namain apa, Dan ikutin aja setingan rekomendasi dari Firebase nya
- Abis itu kalian klik Navigasi di pojok Kiri Atas, Kalian klik `build` dan pilih `Firestore database` dan Buat Firestore nya
- Ke `Rules` Kalian edit Rules nya jadi gini:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```
- Abis itu kalian balik lagi ke halaman utama Firebase dan pergi ke `Project Settings`
- Nah disini kalian tinggal Klik logo `</>` di halaman Project Settings kalian, Dan ikutin aja Rekomendasi setup dari Firebase
- Kalau udah, Nanti kalian bakal di kasih Apikey, AuthDomain, Dan Project ID kalian, Dan tinggal masukin di `src/config/firebase.ts`

## Server Email (Tutorial Coming Soon)

## Donasi
Project ini di buat dengan ❤️, Ayo donasi biar saya makin semangat, Ciakhh
- [Saweria](https://saweria.co/DitzOfc)
