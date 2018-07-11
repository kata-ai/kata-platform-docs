---
id: bot-template-tutorial-id
title: "Kata Platform 2.5 - Bot Studio Tutorial: Bot Template (Bahasa Indonesia)"
prev: bot-template-tutorial
---

Secara garis besar, Kata platform memiliki 3 template yaitu API bot, Button Bot dan Shopping Bot. Kita akan menjelaskan satu per satu dimulai dari API Bot.

## API Bot Template

Fungsi dari bot ini adalah untuk memberikan contoh integrasi dengan API. Pada template ini, contoh yang diambil adalah bagaimana bot menjawab pertanyaan dari user yang menanyakan terkait cuaca kota. Kita akan menggunakan API

```
https://api.openweathermap.org/data/2.5/weather?q=$(context.location)&appid=beb536b6a3f98bb2bfde28ac6d99c6fc
```

Sebelum masuk pada tutorial, kita akan melihat conversation tree dari template ini.

![btb-1](./images/btb-1.png)

### Membuat Bot baru

Pertama-tama, klik “Create with This Template” dan perbaharui nama bot dan sesuaikan timezone dengan lokasimu.

![btb-2](./images/btb-2.png)

Setelah kamu membuat template, cari bot dengan nama “weatherbotTest” dan klik untuk melihat detail

![btb-3](./images/btb-3.png)

Langkah selanjutnya adalah pada pojok kanan atas terdapat tombol “Publish”. Klik tombol tersebut untuk melakukan push version.

![btb-4](./images/btb-4.png)

Untuk melakukan pengujian di emulator, kamu harus melakukan deployment pada chat bot yang kamu buat. Klik pada sub-menu “Deployment” yang terdapat di sisi kiri halaman. Kamu dapat mengisikan nama “weatherBotDeployment” pada isian nama

![btb-5](./images/btb-5.png)

Setelah kamu berhasil menambahkan deployment, kamu dapat melakukan pengujian pada emulator untuk mengecek apakah chat bot kamu berjalan dengan baik atau tidak. Klik “Test chatbot” yang terletak di pojok kanan bawah.

![btb-6](./images/btb-6.png)

Untuk memulai, masukkan kata “info cuaca”

![btb-7](./images/btb-7.png)

Selamat, bot yang dibuat sudah bisa diuji dengan baik pada emulator. Sekarang, saatnya mencoba pada platform LINE.

### Pengaturan pada LINE Developer Console

Pertama-tama, kamu harus membuat akun LINE. Untuk mendaftar akun LINE, kamu harus masuk dalam console developer dari LINE (https://developers.line.me/console/).

![btb-8](./images/btb-8.png)

Setelah kamu mendaftarkan akun LINE, kamu terlebih dahulu harus masuk dalam console dengan memasukkan username dan password

![btb-9](./images/btb-9.png)

Kemudian, kamu harus membuat provider yang dapat diakses pada tautan ini https://developers.line.me/console/register/provider/ dan masukkan nama provider yang kamu inginkan.

![btb-10](./images/btb-10.png)

Setelah kamu membuat provider, klik tombol “MessagingAPI” yang berada diatas halaman. Fitur ini berguna untuk menambahkan channel baru. Isi informasi mengenai channel sesuai dengan keinginanmu. Mohon diperhatikan bahwa saat mengisi **plan** yang kamu pilih adalah **Developer Trial**.

![btb-11](./images/btb-11.png)

Setelah data-data di halaman MessagingAPI sudah kamu isi, tampilan bot akan berubah menjadi terlampir.

![btb-12](./images/btb-12.png)

Untuk melihat detail channel, kamu bisa menekan tombol channel. Kemudian, pada detail channel kamu akan melihat Messaging Settings. Pada bagian tersebut, kamu harus melakukan “enable Webhooks” dan klik tombol Issues pada channel access token.

![btb-13](./images/btb-13.png)

Tampilan setelah tahapan diatas dilakukan adalah sebagai berikut

![btb-14](./images/btb-14.png)

Pada bagian “Using LINE Features”, kamu perlu melakukan nonaktif beberapa fitur pada LINE seperti gambar dibawah ini

![btb-15](./images/btb-15.png)

Sekarang channel kamu telah siap dan dapat diintegrasikan dengan bot.

Pada menu “Deployment”, klik tombol “View channel” untuk melihat list channel yang sudah diintegrasikan. Jika belum ada apapun, berarti bot kamu belum pernah diintegrasikan sebelumnya.

Untuk menambah channel baru, klik tombol “+” pada pojok kanan bawah dari halamanmu. Masukkan nama `line` dan pilih channel `line`

![btb-16](./images/btb-16.png)

Terdapat isian kosong yang harus kamu isi, maka dari itu kamu harus membuka kembali LINE developer console untuk memasukkan data-data didalamnya.

Channel Access Token dapat kamu temukan disini

![btb-17](./images/btb-17.png)

Channel Secret dapat kamu temukan disini

![btb-18](./images/btb-18.png)

Kemudian, klik “create” untuk membuat channel dan tampilan akhirnya akan seperti terlampir

![btb-19](./images/btb-19.png)

Tahapan terakhir adalah memasukkan webhook yang dibuat dari bot ke LINE. Caranya adalah klik simbol mata pada kolom Action untuk melihat detail dari channel yang dibuat dan salin webhook yang ditampilkan.

![btb-20](./images/btb-20.png)

Kemudian, tempel webhook URL tersebut pada LINE console. Klik tombol “verify” untuk mengecek sukses tidaknya keterhubungan dengan channel dalam bot seperti pada gambar dibawah ini.

![btb-21](./images/btb-21.png)

Kamu sekarang sudah dapat melakukan percakapan dengan bot. Pada halaman yang sama, cari gambar QR code. Nantinya QR code ini dapat digunakan untuk menambahkan bot buatanmu sebagai teman.

### Pengujian pada LINE

Setelah kamu sudah menambahkan bot sebagai teman, kirim sebuah pesan yang mengandung kata “info cuaca”

![btb-22](./images/btb-22.png)

Selamat ! Sekarang chat bot mu dengan template API Bot sudah selesai

## Button Bot Template

Pada template ini, kita akan mempelajari bagaimana membuat bot dengan menggunakan action button. Konsep yang digunakan adalah pengguna akan diberikan soal dengan pertanyaan “Siapa nama presiden Indonesia sekarang?”, kemudian pengguna harus memilih jawaban dengan menekan tombol pilihan yang disediakan. Seperti diatas, kita akan melihat conversation tree terlebih dahulu dari template ini.

![btb-23](./images/btb-23.png)

### Membuat bot baru

Pertama-tama, klik “Create with This Template” dan perbaharui nama bot dan sesuaikan timezone dengan lokasimu.

![btb-24](./images/btb-24.png)

Setelah kamu membuat template, cari bot dengan nama “buttonBotTemplate” dan klik untuk melihat detail

![btb-25](./images/btb-25.png)

Langkah selanjutnya adalah pada pojok kanan atas terdapat tombol “Publish”. Klik tombol tersebut untuk melakukan push version.

![btb-26](./images/btb-26.png)

Untuk melakukan pengujian di emulator, kamu harus melakukan deployment pada chat bot yang kamu buat. Klik pada sub-menu “Deployment” yang terdapat di sisi kiri halaman. Kamu dapat mengisikan nama “buttonBotDeployment” pada isian nama

![btb-27](./images/btb-27.png)

### Pengaturan pada LINE Developer Console

Pertama-tama, kamu harus membuat akun LINE. Untuk mendaftar akun LINE, kamu harus masuk dalam console developer dari LINE (https://developers.line.me/console/).

![btb-28](./images/btb-28.png)

Setelah kamu mendaftarkan akun LINE, kamu terlebih dahulu harus masuk dalam console dengan memasukkan username dan password

![btb-29](./images/btb-29.png)

Kemudian, kamu harus membuat provider yang dapat diakses pada tautan ini https://developers.line.me/console/register/provider/ dan masukkan nama provider yang kamu inginkan.

![btb-30](./images/btb-30.png)

Setelah kamu membuat provider, klik tombol “MessagingAPI” yang berada diatas halaman. Fitur ini berguna untuk menambahkan channel baru. Isi informasi mengenai channel sesuai dengan keinginanmu. Mohon diperhatikan bahwa saat mengisi **plan** yang kamu pilih adalah **Developer Trial**.

![btb-31](./images/btb-31.png)

Setelah data-data di halaman MessagingAPI sudah kamu isi, tampilan bot akan berubah menjadi terlampir.

![btb-32](./images/btb-32.png)

Untuk melihat detail channel, kamu bisa menekan tombol channel. Kemudian, pada detail channel kamu akan melihat Messaging Settings. Pada bagian tersebut, kamu harus melakukan “enable Webhooks” dan klik tombol Issues pada channel access token.

![btb-33](./images/btb-33.png)

Tampilan setelah tahapan diatas dilakukan adalah sebagai berikut

![btb-34](./images/btb-34.png)

Pada bagian “Using LINE Features”, kamu perlu melakukan nonaktif beberapa fitur pada LINE seperti gambar dibawah ini

![btb-35](./images/btb-35.png)

Sekarang channel kamu telah siap dan dapat diintegrasikan dengan bot.

Pada menu “Deployment”, klik tombol “View channel” untuk melihat list channel yang sudah diintegrasikan. Jika belum ada apapun, berarti bot kamu belum pernah diintegrasikan sebelumnya.

Untuk menambah channel baru, klik tombol “+” pada pojok kanan bawah dari halamanmu. Masukkan nama `line` dan pilih channel `line`

![btb-36](./images/btb-36.png)

Terdapat isian kosong yang harus kamu isi, maka dari itu kamu harus membuka kembali LINE developer console untuk memasukkan data-data didalamnya.

Channel Access Token dapat kamu temukan disini

![btb-37](./images/btb-37.png)

Channel Secret dapat kamu temukan disini

![btb-38](./images/btb-38.png)

Kemudian, klik “create” untuk membuat channel dan tampilan akhirnya akan seperti terlampir

![btb-39](./images/btb-39.png)

Tahapan terakhir adalah memasukkan webhook yang dibuat dari bot ke LINE. Caranya adalah klik simbol mata pada kolom Action untuk melihat detail dari channel yang dibuat dan salin webhook yang ditampilkan.

![btb-40](./images/btb-40.png)

Kemudian, tempel webhook URL tersebut pada LINE console. Klik tombol “verify” untuk mengecek sukses tidaknya keterhubungan dengan channel dalam bot seperti pada gambar dibawah ini.

![btb-41](./images/btb-42.png)

Kamu sekarang sudah dapat melakukan percakapan dengan bot. Pada halaman yang sama, cari gambar QR code. Nantinya QR code ini dapat digunakan untuk menambahkan bot buatanmu sebagai teman.

### Pengujian pada LINE

Setelah kamu sudah menambahkan bot sebagai teman, kirim sebuah pesan yang mengandung kata “main”

![btb-42](./images/btb-43.png)

Selamat ! Sekarang chat bot mu dengan template API Bot sudah selesai

## Shopping Bot Template

Kamu dapat mencoba shopping bot template untuk membuat konsep sederhana untuk melakukan pemesanan dari konsumen ke bot. Seperti diatas, kita akan melihat conversation tree terlebih dahulu dari template ini.

![btb-43](./images/btb-44.png)

### Membuat bot baru

Pertama-tama, klik “Create with This Template” dan perbaharui nama bot dan sesuaikan timezone dengan lokasimu.

![btb-44](./images/btb-45.png)

Setelah kamu membuat template, cari bot dengan nama “shoppingBotTemplate” dan klik untuk melihat detail

![btb-45](./images/btb-46.png)

Langkah selanjutnya adalah pada pojok kanan atas terdapat tombol “Publish”. Klik tombol tersebut untuk melakukan push version.

![btb-46](./images/btb-47.png)

Untuk melakukan pengujian di emulator, kamu harus melakukan deployment pada chat bot yang kamu buat. Klik pada sub-menu “Deployment” yang terdapat di sisi kiri halaman. Kamu dapat mengisikan nama “shoppingBotDeployment” pada isian nama

![btb-47](./images/btb-48.png)

Setelah kamu berhasil menambahkan deployment, kamu dapat melakukan pengujian pada emulator untuk mengecek apakah chat bot kamu berjalan dengan baik atau tidak. Klik “Test chatbot” yang terletak di pojok kanan bawah.

![btb-48](./images/btb-49.png)

Untuk memulai, masukkan kata “morning”

![btb-49](./images/btb-50.png)

Selamat, bot yang dibuat sudah bisa diuji dengan baik pada emulator. Sekarang, saatnya mencoba pada platform LINE.

### Pengaturan pada LINE Developer Console

Pertama-tama, kamu harus membuat akun LINE. Untuk mendaftar akun LINE, kamu harus masuk dalam console developer dari LINE (https://developers.line.me/console/).

![btb-50](./images/btb-51.png)

Setelah kamu mendaftarkan akun LINE, kamu terlebih dahulu harus masuk dalam console dengan memasukkan username dan password

![btb-51](./images/btb-52.png)

Kemudian, kamu harus membuat provider yang dapat diakses pada tautan ini https://developers.line.me/console/register/provider/ dan masukkan nama provider yang kamu inginkan.

![btb-52](./images/btb-53.png)

Setelah kamu membuat provider, klik tombol “MessagingAPI” yang berada diatas halaman. Fitur ini berguna untuk menambahkan channel baru. Isi informasi mengenai channel sesuai dengan keinginanmu. Mohon diperhatikan bahwa saat mengisi **plan** yang kamu pilih adalah **Developer Trial**.

![btb-53](./images/btb-54.png)

Setelah data-data di halaman MessagingAPI sudah kamu isi, tampilan bot akan berubah menjadi terlampir.

![btb-54](./images/btb-55.png)

Untuk melihat detail channel, kamu bisa menekan tombol channel. Kemudian, pada detail channel kamu akan melihat Messaging Settings. Pada bagian tersebut, kamu harus melakukan “enable Webhooks” dan klik tombol Issues pada channel access token.

![btb-55](./images/btb-56.png)

Tampilan setelah tahapan diatas dilakukan adalah sebagai berikut

![btb-56](./images/btb-57.png)

Pada bagian “Using LINE Features”, kamu perlu melakukan nonaktif beberapa fitur pada LINE seperti gambar dibawah ini

![btb-57](./images/btb-58.png)

Sekarang channel kamu telah siap dan dapat diintegrasikan dengan bot.

Pada menu “Deployment”, klik tombol “View channel” untuk melihat list channel yang sudah diintegrasikan. Jika belum ada apapun, berarti bot kamu belum pernah diintegrasikan sebelumnya.

Untuk menambah channel baru, klik tombol “+” pada pojok kanan bawah dari halamanmu. Masukkan nama line dan pilih channel line

![btb-58](./images/btb-59.png)

Terdapat isian kosong yang harus kamu isi, maka dari itu kamu harus membuka kembali LINE developer console untuk memasukkan data-data didalamnya.

Channel Access Token dapat kamu temukan disini

![btb-59](./images/btb-60.png)

Channel Secret dapat kamu temukan disini

![btb-60](./images/btb-61.png)

Kemudian, klik “create” untuk membuat channel dan tampilan akhirnya akan seperti terlampir

![btb-61](./images/btb-62.png)

Tahapan terakhir adalah memasukkan webhook yang dibuat dari bot ke LINE. Caranya adalah klik simbol mata pada kolom Action untuk melihat detail dari channel yang dibuat dan salin webhook yang ditampilkan.

![btb-62](./images/btb-63.png)

Kemudian, tempel webhook URL tersebut pada LINE console. Klik tombol “verify” untuk mengecek sukses tidaknya keterhubungan dengan channel dalam bot seperti pada gambar dibawah ini.

![btb-63](./images/btb-64.png)

Kamu sekarang sudah dapat melakukan percakapan dengan bot. Pada halaman yang sama, cari gambar QR code. Nantinya QR code ini dapat digunakan untuk menambahkan bot buatanmu sebagai teman.

### Pengujian pada LINE

Setelah kamu sudah menambahkan bot sebagai teman, kirim sebuah pesan yang mengandung kata “hai”

![btb-64](./images/btb-65.png)

Selamat ! Sekarang chat bot mu dengan template Shopping Bot sudah selesai

---

## Version log

- 1.0.0 Initial release, created by amanda@kata.ai
- 1.0.1 Adjustment for LINE deployment section
