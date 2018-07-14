---
id: bot-template-tutorial-id
title: "Bot Studio Tutorial: Bot Template (Bahasa Indonesia)"
prev: bot-template-tutorial
next: faq
---

Secara garis besar, Kata platform memiliki 3 template yaitu API bot, Button Bot dan Shopping Bot. Kita akan menjelaskan satu per satu dimulai dari API Bot.

## API Bot Template

Fungsi dari bot ini adalah untuk memberikan contoh integrasi dengan API. Pada template ini, contoh yang diambil adalah bagaimana bot menjawab pertanyaan dari user yang menanyakan terkait cuaca kota. Kita akan menggunakan API

```
https://api.openweathermap.org/data/2.5/weather?q=$(context.location)&appid=beb536b6a3f98bb2bfde28ac6d99c6fc
```

Sebelum masuk pada tutorial, kita akan melihat conversation tree dari template ini.

![btb-1](./images/bot-template-id/btb-1.png)

### Membuat Bot baru

Pertama-tama, klik “Create with This Template” dan perbaharui nama bot dan sesuaikan timezone dengan lokasimu.

![btb-2](./images/bot-template-id/btb-2.png)

Setelah kamu membuat template, cari bot dengan nama “weatherbotTest” dan klik untuk melihat detail

![btb-3](./images/bot-template-id/btb-3.png)

Langkah selanjutnya adalah pada pojok kanan atas terdapat tombol “Publish”. Klik tombol tersebut untuk melakukan push version.

![btb-4](./images/bot-template-id/btb-4.png)

Untuk melakukan pengujian di emulator, kamu harus melakukan deployment pada chat bot yang kamu buat. Klik pada sub-menu “Deployment” yang terdapat di sisi kiri halaman. Kamu dapat mengisikan nama “weatherBotDeployment” pada isian nama

![btb-5](./images/bot-template-id/btb-5.png)

Setelah kamu berhasil menambahkan deployment, kamu dapat melakukan pengujian pada emulator untuk mengecek apakah chat bot kamu berjalan dengan baik atau tidak. Klik “Test chatbot” yang terletak di pojok kanan bawah.

![btb-6](./images/bot-template-id/btb-6.png)

Untuk memulai, masukkan kata “info cuaca”

![btb-7](./images/bot-template-id/btb-7.png)

Selamat, bot yang dibuat sudah bisa diuji dengan baik pada emulator. Sekarang, saatnya mencoba pada platform LINE.

### Pengaturan pada LINE Developer Console

Pertama-tama, kamu harus membuat akun LINE. Untuk mendaftar akun LINE, kamu harus masuk dalam console developer dari LINE (https://developers.line.me/console/).

![btb-8](./images/bot-template-id/btb-8.png)

Setelah kamu mendaftarkan akun LINE, kamu terlebih dahulu harus masuk dalam console dengan memasukkan username dan password

![btb-9](./images/bot-template-id/btb-9.png)

Kemudian, kamu harus membuat provider yang dapat diakses pada tautan ini https://developers.line.me/console/register/provider/ dan masukkan nama provider yang kamu inginkan.

![btb-10](./images/bot-template-id/btb-10.png)

Setelah kamu membuat provider, klik tombol “MessagingAPI” yang berada diatas halaman. Fitur ini berguna untuk menambahkan channel baru. Isi informasi mengenai channel sesuai dengan keinginanmu. Mohon diperhatikan bahwa saat mengisi **plan** yang kamu pilih adalah **Developer Trial**.

![btb-11](./images/bot-template-id/btb-11.png)

Setelah data-data di halaman MessagingAPI sudah kamu isi, tampilan bot akan berubah menjadi terlampir.

![btb-12](./images/bot-template-id/btb-12.png)

Untuk melihat detail channel, kamu bisa menekan tombol channel. Kemudian, pada detail channel kamu akan melihat Messaging Settings. Pada bagian tersebut, kamu harus melakukan “enable Webhooks” dan klik tombol Issues pada channel access token.

![btb-13](./images/bot-template-id/btb-13.png)

Tampilan setelah tahapan diatas dilakukan adalah sebagai berikut

![btb-14](./images/bot-template-id/btb-14.png)

Pada bagian “Using LINE Features”, kamu perlu melakukan nonaktif beberapa fitur pada LINE seperti gambar dibawah ini

![btb-15](./images/bot-template-id/btb-15.png)

Sekarang channel kamu telah siap dan dapat diintegrasikan dengan bot.

Pada menu “Deployment”, klik tombol “View channel” untuk melihat list channel yang sudah diintegrasikan. Jika belum ada apapun, berarti bot kamu belum pernah diintegrasikan sebelumnya.

Untuk menambah channel baru, klik tombol “+” pada pojok kanan bawah dari halamanmu. Masukkan nama `line` dan pilih channel `line`

![btb-16](./images/bot-template-id/btb-16.png)

Terdapat isian kosong yang harus kamu isi, maka dari itu kamu harus membuka kembali LINE developer console untuk memasukkan data-data didalamnya.

Channel Access Token dapat kamu temukan disini

![btb-17](./images/bot-template-id/btb-17.png)

Channel Secret dapat kamu temukan disini

![btb-18](./images/bot-template-id/btb-18.png)

Kemudian, klik “create” untuk membuat channel dan tampilan akhirnya akan seperti terlampir

![btb-19](./images/bot-template-id/btb-19.png)

Tahapan terakhir adalah memasukkan webhook yang dibuat dari bot ke LINE. Caranya adalah klik simbol mata pada kolom Action untuk melihat detail dari channel yang dibuat dan salin webhook yang ditampilkan.

![btb-20](./images/bot-template-id/btb-20.png)

Kemudian, tempel webhook URL tersebut pada LINE console. Klik tombol “verify” untuk mengecek sukses tidaknya keterhubungan dengan channel dalam bot seperti pada gambar dibawah ini.

![btb-21](./images/bot-template-id/btb-21.png)

Kamu sekarang sudah dapat melakukan percakapan dengan bot. Pada halaman yang sama, cari gambar QR code. Nantinya QR code ini dapat digunakan untuk menambahkan bot buatanmu sebagai teman.

### Pengujian pada LINE

Setelah kamu sudah menambahkan bot sebagai teman, kirim sebuah pesan yang mengandung kata “info cuaca”

![btb-22](./images/bot-template-id/btb-22.png)

Selamat ! Sekarang chat bot mu dengan template API Bot sudah selesai

## Button Bot Template

Pada template ini, kita akan mempelajari bagaimana membuat bot dengan menggunakan action button. Konsep yang digunakan adalah pengguna akan diberikan soal dengan pertanyaan “Siapa nama presiden Indonesia sekarang?”, kemudian pengguna harus memilih jawaban dengan menekan tombol pilihan yang disediakan. Seperti diatas, kita akan melihat conversation tree terlebih dahulu dari template ini.

![btb-23](./images/bot-template-id/btb-23.png)

### Membuat bot baru

Pertama-tama, klik “Create with This Template” dan perbaharui nama bot dan sesuaikan timezone dengan lokasimu.

![btb-24](./images/bot-template-id/btb-24.png)

Setelah kamu membuat template, cari bot dengan nama “buttonBotTemplate” dan klik untuk melihat detail

![btb-25](./images/bot-template-id/btb-25.png)

Langkah selanjutnya adalah pada pojok kanan atas terdapat tombol “Publish”. Klik tombol tersebut untuk melakukan push version.

![btb-26](./images/bot-template-id/btb-26.png)

Untuk melakukan pengujian di emulator, kamu harus melakukan deployment pada chat bot yang kamu buat. Klik pada sub-menu “Deployment” yang terdapat di sisi kiri halaman. Kamu dapat mengisikan nama “buttonBotDeployment” pada isian nama

![btb-27](./images/bot-template-id/btb-27.png)

### Pengaturan pada LINE Developer Console

Pertama-tama, kamu harus membuat akun LINE. Untuk mendaftar akun LINE, kamu harus masuk dalam console developer dari LINE (https://developers.line.me/console/).

![btb-28](./images/bot-template-id/btb-28.png)

Setelah kamu mendaftarkan akun LINE, kamu terlebih dahulu harus masuk dalam console dengan memasukkan username dan password

![btb-29](./images/bot-template-id/btb-29.png)

Kemudian, kamu harus membuat provider yang dapat diakses pada tautan ini https://developers.line.me/console/register/provider/ dan masukkan nama provider yang kamu inginkan.

![btb-30](./images/bot-template-id/btb-30.png)

Setelah kamu membuat provider, klik tombol “MessagingAPI” yang berada diatas halaman. Fitur ini berguna untuk menambahkan channel baru. Isi informasi mengenai channel sesuai dengan keinginanmu. Mohon diperhatikan bahwa saat mengisi **plan** yang kamu pilih adalah **Developer Trial**.

![btb-31](./images/bot-template-id/btb-31.png)

Setelah data-data di halaman MessagingAPI sudah kamu isi, tampilan bot akan berubah menjadi terlampir.

![btb-32](./images/bot-template-id/btb-32.png)

Untuk melihat detail channel, kamu bisa menekan tombol channel. Kemudian, pada detail channel kamu akan melihat Messaging Settings. Pada bagian tersebut, kamu harus melakukan “enable Webhooks” dan klik tombol Issues pada channel access token.

![btb-33](./images/bot-template-id/btb-33.png)

Tampilan setelah tahapan diatas dilakukan adalah sebagai berikut

![btb-34](./images/bot-template-id/btb-34.png)

Pada bagian “Using LINE Features”, kamu perlu melakukan nonaktif beberapa fitur pada LINE seperti gambar dibawah ini

![btb-35](./images/bot-template-id/btb-35.png)

Sekarang channel kamu telah siap dan dapat diintegrasikan dengan bot.

Pada menu “Deployment”, klik tombol “View channel” untuk melihat list channel yang sudah diintegrasikan. Jika belum ada apapun, berarti bot kamu belum pernah diintegrasikan sebelumnya.

Untuk menambah channel baru, klik tombol “+” pada pojok kanan bawah dari halamanmu. Masukkan nama `line` dan pilih channel `line`

![btb-36](./images/bot-template-id/btb-36.png)

Terdapat isian kosong yang harus kamu isi, maka dari itu kamu harus membuka kembali LINE developer console untuk memasukkan data-data didalamnya.

Channel Access Token dapat kamu temukan disini

![btb-37](./images/bot-template-id/btb-37.png)

Channel Secret dapat kamu temukan disini

![btb-38](./images/bot-template-id/btb-38.png)

Kemudian, klik “create” untuk membuat channel dan tampilan akhirnya akan seperti terlampir

![btb-39](./images/bot-template-id/btb-39.png)

Tahapan terakhir adalah memasukkan webhook yang dibuat dari bot ke LINE. Caranya adalah klik simbol mata pada kolom Action untuk melihat detail dari channel yang dibuat dan salin webhook yang ditampilkan.

![btb-40](./images/bot-template-id/btb-40.png)

Kemudian, tempel webhook URL tersebut pada LINE console. Klik tombol “verify” untuk mengecek sukses tidaknya keterhubungan dengan channel dalam bot seperti pada gambar dibawah ini.

![btb-41](./images/bot-template-id/btb-42.png)

Kamu sekarang sudah dapat melakukan percakapan dengan bot. Pada halaman yang sama, cari gambar QR code. Nantinya QR code ini dapat digunakan untuk menambahkan bot buatanmu sebagai teman.

### Pengujian pada LINE

Setelah kamu sudah menambahkan bot sebagai teman, kirim sebuah pesan yang mengandung kata “main”

![btb-42](./images/bot-template-id/btb-43.png)

Selamat ! Sekarang chat bot mu dengan template API Bot sudah selesai

## Shopping Bot Template

Kamu dapat mencoba shopping bot template untuk membuat konsep sederhana untuk melakukan pemesanan dari konsumen ke bot. Seperti diatas, kita akan melihat conversation tree terlebih dahulu dari template ini.

![btb-43](./images/bot-template-id/btb-44.png)

### Membuat bot baru

Pertama-tama, klik “Create with This Template” dan perbaharui nama bot dan sesuaikan timezone dengan lokasimu.

![btb-44](./images/bot-template-id/btb-45.png)

Setelah kamu membuat template, cari bot dengan nama “shoppingBotTemplate” dan klik untuk melihat detail

![btb-45](./images/bot-template-id/btb-46.png)

Langkah selanjutnya adalah pada pojok kanan atas terdapat tombol “Publish”. Klik tombol tersebut untuk melakukan push version.

![btb-46](./images/bot-template-id/btb-47.png)

Untuk melakukan pengujian di emulator, kamu harus melakukan deployment pada chat bot yang kamu buat. Klik pada sub-menu “Deployment” yang terdapat di sisi kiri halaman. Kamu dapat mengisikan nama “shoppingBotDeployment” pada isian nama

![btb-47](./images/bot-template-id/btb-48.png)

Setelah kamu berhasil menambahkan deployment, kamu dapat melakukan pengujian pada emulator untuk mengecek apakah chat bot kamu berjalan dengan baik atau tidak. Klik “Test chatbot” yang terletak di pojok kanan bawah.

![btb-48](./images/bot-template-id/btb-49.png)

Untuk memulai, masukkan kata “morning”

![btb-49](./images/bot-template-id/btb-50.png)

Selamat, bot yang dibuat sudah bisa diuji dengan baik pada emulator. Sekarang, saatnya mencoba pada platform LINE.

### Pengaturan pada LINE Developer Console

Pertama-tama, kamu harus membuat akun LINE. Untuk mendaftar akun LINE, kamu harus masuk dalam console developer dari LINE (https://developers.line.me/console/).

![btb-50](./images/bot-template-id/btb-51.png)

Setelah kamu mendaftarkan akun LINE, kamu terlebih dahulu harus masuk dalam console dengan memasukkan username dan password

![btb-51](./images/bot-template-id/btb-52.png)

Kemudian, kamu harus membuat provider yang dapat diakses pada tautan ini https://developers.line.me/console/register/provider/ dan masukkan nama provider yang kamu inginkan.

![btb-52](./images/bot-template-id/btb-53.png)

Setelah kamu membuat provider, klik tombol “MessagingAPI” yang berada diatas halaman. Fitur ini berguna untuk menambahkan channel baru. Isi informasi mengenai channel sesuai dengan keinginanmu. Mohon diperhatikan bahwa saat mengisi **plan** yang kamu pilih adalah **Developer Trial**.

![btb-53](./images/bot-template-id/btb-54.png)

Setelah data-data di halaman MessagingAPI sudah kamu isi, tampilan bot akan berubah menjadi terlampir.

![btb-54](./images/bot-template-id/btb-55.png)

Untuk melihat detail channel, kamu bisa menekan tombol channel. Kemudian, pada detail channel kamu akan melihat Messaging Settings. Pada bagian tersebut, kamu harus melakukan “enable Webhooks” dan klik tombol Issues pada channel access token.

![btb-55](./images/bot-template-id/btb-56.png)

Tampilan setelah tahapan diatas dilakukan adalah sebagai berikut

![btb-56](./images/bot-template-id/btb-57.png)

Pada bagian “Using LINE Features”, kamu perlu melakukan nonaktif beberapa fitur pada LINE seperti gambar dibawah ini

![btb-57](./images/bot-template-id/btb-58.png)

Sekarang channel kamu telah siap dan dapat diintegrasikan dengan bot.

Pada menu “Deployment”, klik tombol “View channel” untuk melihat list channel yang sudah diintegrasikan. Jika belum ada apapun, berarti bot kamu belum pernah diintegrasikan sebelumnya.

Untuk menambah channel baru, klik tombol “+” pada pojok kanan bawah dari halamanmu. Masukkan nama line dan pilih channel line

![btb-58](./images/bot-template-id/btb-59.png)

Terdapat isian kosong yang harus kamu isi, maka dari itu kamu harus membuka kembali LINE developer console untuk memasukkan data-data didalamnya.

Channel Access Token dapat kamu temukan disini

![btb-59](./images/bot-template-id/btb-60.png)

Channel Secret dapat kamu temukan disini

![btb-60](./images/bot-template-id/btb-61.png)

Kemudian, klik “create” untuk membuat channel dan tampilan akhirnya akan seperti terlampir

![btb-61](./images/bot-template-id/btb-62.png)

Tahapan terakhir adalah memasukkan webhook yang dibuat dari bot ke LINE. Caranya adalah klik simbol mata pada kolom Action untuk melihat detail dari channel yang dibuat dan salin webhook yang ditampilkan.

![btb-62](./images/bot-template-id/btb-63.png)

Kemudian, tempel webhook URL tersebut pada LINE console. Klik tombol “verify” untuk mengecek sukses tidaknya keterhubungan dengan channel dalam bot seperti pada gambar dibawah ini.

![btb-63](./images/bot-template-id/btb-64.png)

Kamu sekarang sudah dapat melakukan percakapan dengan bot. Pada halaman yang sama, cari gambar QR code. Nantinya QR code ini dapat digunakan untuk menambahkan bot buatanmu sebagai teman.

### Pengujian pada LINE

Setelah kamu sudah menambahkan bot sebagai teman, kirim sebuah pesan yang mengandung kata “hai”

![btb-64](./images/bot-template-id/btb-65.png)

Selamat ! Sekarang chat bot mu dengan template Shopping Bot sudah selesai

---
