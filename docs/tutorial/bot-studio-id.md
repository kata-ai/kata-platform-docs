---
id: bot-studio-tutorial-id
title: Bot Studio tutorial (Bahasa Indonesia)
prev: bot-studio-tutorial
next: nl-studio-tutorial
---

## Pendahuluan

Dalam tutorial kali ini, kita akan membuat sebuah bot percakapan sederhana untuk memesan pizza yang digunakan di platform LINE. Pembuatan bot dapat dilakukan dengan mudah dan cepat, bahkan dengan minimnya pengetahuan bahasa pemrograman, yaitu dengan menggunakan teknologi dari Kata platform.

Mari kita mulai dengan melihat diagram alur bot atau biasa disebut dengan “conversation tree”. Conversation tree dapat memetakan fungsionalitas bot dalam merespon pengguna.

![bsb-1](./images/bsb-1.png)

## Mendaftar Akun Kata Platform

Sebelum masuk pada pembuatan bot percakapan, kamu harus mendaftarkan diri terlebih dahulu pada platform kami. Lewati tahapan ini jika kamu sudah memiliki akun sebelumnya.

Masuk terlebih dahulu pada tautan [will change it later] http://new-platform.katalabs.io/login dan klik pada tautan “Sign up”

![bsb-2](./images/bsb-2.png)

Kemudian, kamu akan diminta mengisi username dan email. Untuk mempercepat proses pendaftaran, lebih baik kamu sudah menyiapkan sejak awal untuk data-data seperti gambar dibawah ini. Pemilihan tipe akun bisa disesuaikan dengan kebutuhanmu mendatang. Klik “Sign Up” untuk melanjutkan pembuatan akun.

![bsb-3](./images/bsb-3.png)

Kamu akan mendapatkan email konfirmasi terkait akunmu untuk verifikasi dari kami. Kamu dapat mengikuti petunjuk pada email kamu. Selamat, akunmu telah siap dan kamu dapat melanjutkan membuat bot percakapan.

## Tahapan Pembuatan Bot Percakapan

### Login ke Kata Platform

Masuk ke tautan http://platform.kata.ai/login seperti pada gambar terlampir.

![bsb-4](./images/bsb-4.png)

Klik “Login” untuk melanjutkan

### Membuat bot baru

Setelah login, tampilan pertama dalam Kata platform adalah dashboard.

![bsb-5](./images/bsb-5.png)

Menu pertama yang muncul adalah menu dashboard pada Bot. Disini kamu bisa melihat template-template bot yang sudah disediakan sebelumnya dan kamu bisa mencoba juga nantinya untuk membantu pemahaman.

Untuk membuat bot baru, klik “Create new bot” dan kamu akan diminta mengisi data seperti terlampir.

![bsb-6](./images/bsb-6.png)

## Membuat Flow `Fallback`

### Membuat flow

Setelah bot percakapan sudah dibuat, kamu akan diarahkan pada sub-menu “Conversational Flows”. Sesuai dengan diagram alur diatas, kita akan membuat terlebih dahulu kondisi yang tidak masuk flow manapun.

![bsb-7](./images/bsb-7.png)

Dalam 1 flow terdiri dari **intent, state dan action**. Pada gambar dibawah ini, kamu dapat melihat 1 flow yang sudah dibuat otomatis oleh sistem, yaitu `default` flow. Kita akan menghapus flow yang sudah ada sebelumnya dengan menekan tombol “more” dan kemudian “Delete”.

![bsb-8](./images/bsb-8.png)

Selanjutnya, klik tombol “Create Flow” untuk membuat flow dan beri nama `fallback`. Flow ini berfungsi untuk menangani input dari pengguna yang tidak dapat diterima oleh flow manapun. Atur flow menjadi active, persistent dan default sehingga isian akan seperti dibawah ini

![bsb-9](./images/bsb-9.png)

### Membuat intent `fallback`

Setelah membuat flow, kita akan masuk ke dalam intent dengan menekan tab “Intents” pada sub-menu (gambar dibawah). Hapus intent dengan menekan simbol “more” dan klik teks “Delete”. Selanjutnya, kita akan membuat intent baru untuk `fallback`.

![bsb-10](./images/bsb-10.png)

Klik tombol “Create Intent” dan isi isian seperti terlampir. Atur intent yang dibuat menjadi fallback dengan klik “as fallback”

![bsb-11](./images/bsb-11.png)

Sehingga intent yang dibuat akan menjadi gambar dibawah ini

![bsb-12](./images/bsb-12.png)

### Membuat state `init`

Setelah langkah diatas berhasil, selanjutnya kita akan membuat state `init`. Hapus state yang sebelumnya disediakan dengan menekan state dan klik “Delete”. Lalu, klik tombol “+” yang berada di bagian kanan bawah halaman kamu.

Isi state dengan nama “init” pada tab “Overview” dan atur state tersebut menjadi initial state dan end state (seperti pada gambar dibawah). Fungsi “initial state” berguna untuk menjadikan state `init` sebagai yang pertama dicek pada flow dan “end state” berguna untuk menjadikan state `init` sebagai yang terakhir.

![bsb-13](./images/bsb-13.png)

### Menambahkan action untuk state `init`

Pada tahap ini kita akan membuat lanjutan conversation tree setelah fallback, yaitu action `sorryMessage`. Action ini akan menampilkan pesan permohonan maaf dikarenakan input pengguna tidak masuk pada flow manapun. Pertama-tama, hapus terlebih dahulu action yang sudah ada dengan cara menekan simbol “x” pada bagian kanan action. Kemudian, kita mulai untuk menambahkan action. Klik tombol “Add action” pada bagian action.

Klik simbol “+” untuk menambahkan action. Lalu akan muncul tampilan pilihan-pilihan action yang dapat dilakukan oleh suatu state. Pada tutorial ini kita akan membuat tipe teks sesuai dengan diagram alur diatas. Isi konten action sesuai dengan gambar dibawah ini. Klik tombol “Update Action” untuk menyimpan action.

![bsb-14](./images/bsb-14.png)

Tampilan setelah action sudah ditambahkan adalah sebagai berikut

![bsb-15](./images/bsb-15.png)

### Menambahkan transition `fallback` pada `init` state

Setelah action pada state sudah ditambah, selanjutnya kita akan membuat transition `fallback`. Klik pada state yang sudah kamu buat, dan pada tab “Transition” masukkan data-data seperti dibawah ini

![bsb-16](./images/bsb-16.png)

Klik “Update” untuk memperbaharui state dengan penambahan transisi.

## Membuat Flow `Order`

Kamu telah berhasil membuat flow `fallback` , selanjutnya kita akan masuk pada flow `order`.

![bsb-17](./images/bsb-17.png)

#### Membuat NLUs `order`

Alur untuk memesan pizza dimulai dengan menerima input order dari pengguna. Nah, untuk memahaminya kita akan memasukkan kata-kata seperti pesan, pesen, pesen pitza, pizza dan lainnya dengan mendefinisikan NLU. NLU berfungsi agar bot memahami masukkan dari pengguna.

Untuk memulai, klik sub-menu “NLUs” pada menu Bot dan klik “Create NLU” untuk membuat NLU pertama kamu. Sesuai dengan penjelasan diatas, masukkan kata-kata yang berhubungan dengan memesan pizza. Dengan kata lain, NLU ini merupakan tipe “keyword”. Kamu juga bisa berkreasi sebanyak mungkin, minimal kata-katanya seperti pada gambar dibawah ini.

![bsb-18](./images/bsb-18.png)

#### Menambahkan flow `order`

Setelah mempersiapkan NLU untuk mengklasifikasikan masukkan dari pengguna, selanjutnya adalah kita akan menambahkan flow baru. Untuk membuat flow baru, kita harus masuk ke sub-menu “Conversation Flow” kemudian klik “Create Flow”.

Masukkan isian dengan nama `order`

![bsb-19](./images/bsb-19.png)

#### Membuat intent `ordertxt`

Setiap flow membutuhkan sebuah intent yang diatur sebagai “initial”, oleh karena itu pada flow `order` kita akan menggunakan intent `orderTxt` yang akan mengecek masukkan pemesan pizza.

Intent ini memiliki tipe text dan menggunakan NLU yang sudah kita buat sebelumnya. Pilih NLU yang sudah dibuat pada bagian “classifier” untuk mengklasifikasi masukkan dari pengguna apakah termasuk dalam lingkup pesanan.

![bsb-20](./images/bsb-20.png)

#### Membuat state `init` pada flow `order`

Sesuai dengan pembuatan flow `fallback` kita harus membuat terlebih dahulu state `init`. Perbedaan dengan flow `fallback`, pada state ini hanya diatur sebagai initial saja.

![bsb-21](./images/bsb-21.png)

### Membuat state `showpizza`

#### Membuat state `showPizza`

Kita akan menyesuaikan dengan conversation tree yaitu menampilkan menu pizza dan menanyakan menu yang diinginkan.

![bsb-22](./images/bsb-22.png)

Untuk memulai, klik tombol “+” pada sub-menu “Conversation Flow” dan beri nama state dengan `showPizza`.

#### Menambahkan action `pizzaMenu` dan `askOptions` pada state `showPizza`

Kemudian, pada state `showPizza` tambahkan action `pizzaOptions` yang menampilkan **teks informasi **menu Pepperoni dan Veggie Lovers.

![bsb-23](./images/bsb-23.png)

Lalu tambahkan juga action untuk menanyakan menu pada pengguna yang akan kita beri nama `askOptions` dengan menggunakan tipe action text

![bsb-24](./images/bsb-24.png)

Sehingga hasilnya menjadi seperti gambar dibawah ini :

![bsb-25](./images/bsb-25.png)

Selanjutnya, kita akan mencoba membuat tampilan menu pizza dengan menggunakan `carousel`. Hapus action `pizzaOptions` dari state `showPizza` dengan menekan simbol "x" yang berada pada sebelah kanan action.

Kemudian tambah action baru dengan nama `pizzaMenu` dan pilih action `carousel`

![bsb-26](./images/bsb-26.png)

Kemudian isi konten seperti dibawah ini :

```
Title: Pepperoni
Text: Untuk pecinta pepperoni, mantap!
Thumbnail Image Url: https://cdn4.ruled.me/wp-content/uploads/2014/08/pepperonipizza.jpg
Actions:
     Label: Pepperoni
     Type: Postback
     Payload: {"type":"pizza","pizza":"Pepperoni"}
```

```
Title: Veggie Lovers
Text: Untuk pecinta sayur nihh
Thumbnail Image Url: https://www.calcuttaweb.com/store/image/data/calcutta/pizza/veggie-lovers-pizza-pihu-7.jpg
Actions:
     Label: Veggie Lovers
     Type: Postback
     Payload: {"type":"pizza","pizza":"Veggie Lovers"}
```

![bsb-27](./images/bsb-27.png)

![bsb-28](./images/bsb-28.png)

Klik “Create” untuk melanjutkan, pastikan datamu sama dengan gambar dibawah ini :

![bsb-29](./images/bsb-29.png)

#### Membuat intent `pizzaChosen`

Intent dibuat untuk menangani masukkan dari pengguna setelah memilih menu pizza yang diinginkan, maka dari itu kita akan membuat intent bernama `pizzaChosen`.

![bsb-30](./images/bsb-30.png)

#### Membuat intent `reenter`

Tambahkan intent `reenter`

![bsb-31](./images/bsb-31.png)

#### Membuat transition antara state `init` dengan state `showPizza`

Untuk menghubungkan alur dari pengguna memesan hingga pilihan menu ditampilkan, kita akan membuat transisi antara kedua state yang sudah kita buat diatas. Cara menghubungkannya adalah kamu dapat menarik titik bulat hijau pada state `init` ke state `showPizza` hingga muncul pengaturan transisi di bagian kanan

![bsb-32](./images/bsb-32.png)

### Membuat NLUS `quantity`

Alur selanjutnya adalah menangani pengguna hendak memesan jumlah pizza yang diharapkan.

![bsb-33](./images/bsb-33.png)

Pada tahap ini kita akan membuat NLU dengan regex number. Bot diharapkan dapat memahami masukkan pengguna pada angka 1-9.

![bsb-34](./images/bsb-34.png)

#### Membuat Intent `quantity`

Setelah membuat NLU, kita akan menambahkan intent yang akan menanggapi input kuantitas dari pengguna

![bsb-35](./images/bsb-35.png)

#### Membuat state `pizzaQuantity`

Kemudian, kita akan membuat state `pizzaQuantity` yang akan menanyakan kuantitas pesanan pengguna dengan action `askQuantity` berupa teks untuk memberikan respon bot kepada pengguna.

![bsb-36](./images/bsb-36.png)

#### Menambahkan transisi `showPizza` dengan `pizzaQuantity`

Pada transisi yang menghubungkan state `showPizza` dengan state `pizzaQuantity`, kita akan menghubungkan dengan menyimpan value `payload.pizza` ke dalam `context.pizza` ketika terjadi perpindahan flow

![bsb-37](./images/bsb-37.png)

### Membuat NLU konfirmasi

Sesuai dengan conversation tree diatas, langkah selanjutnya adalah memberikan konfirmasi pemesanan.

![bsb-38](./images/bsb-38.png)

Pertama-tama kita akan membuat NLU yang merupakan keyword dari kata-kata konfirmasi ya dan tidak dengan nama NLU `yesno` dan memiliki 2 keyword `yes` dan `no.`

![bsb-39](./images/bsb-39.png)

#### Membuat state `confirmPizza`

Setelah membuat NLU, kita akan membuat state `confirmPizza` yang berfungsi untuk mengkonfirmasi pembelian. Selain itu, kita akan menyimpan value pilihan pizza dan informasi kuantitas

![bsb-40](./images/bsb-40.png)

#### Membuat transisi dari `pizzaQuantity` menuju `confirmPizza`

Pada tahapan ini, kita akan membuat transisi dengan menyimpan value (mapping) kuantitas pizza **dan** konfirmasi tipe pizza yang dipilih

![bsb-41](./images/bsb-41.png)

Kemudian, pada state `confirmPizza` buatlah sebuah mapping ketika melakukan transit seperti gambar dibawah dengan cara memperbaharui state yang sudah dibuat.

![bsb-42](./images/bsb-42.png)

####Membuat intent `yesno`
Sebelumnyakita sudah membuat NLU yang berisikan konfirmasi ya dan tidak. NLU tersebut akan digunakan pada tahap ini. Agar bot dapat mengerti pernyataan konfirmasi dari pengguna, kamu dapat membuat intent untuk menampung masukkan yang menggunakan NLU `yesno` classifier.

Pertama-tama, kita akan membuat intent untuk keyword `yes`

![bsb-43](./images/bsb-43.png)

Lalu, kita akan membuat intent untuk keyword `no`

![bsb-44](./images/bsb-44.png)

#### Membuat state `done`

Pada state `done`, kita akan menyelesaikan pemesanan dengan mengucapkan terimakasih dan menjadikan state yang paling akhir.

![bsb-45](./images/bsb-45.png)

Terdapat suatu kondisi dimana pengguna membatalkan pesanan. Maka dari itu, kita akan menambahkan condition pada action `sayThanks` dan `sayCancel`

![bsb-46](./images/bsb-46.png)

![bsb-47](./images/bsb-47.png)

Sehingga, hasil akhir dari state done adalah sebagai berikut

![bsb-48](./images/bsb-48.png)

#### Membuat transisi dari `confirmPizza` menuju `done`

Selanjutnya adalah kita akan menghubungkan state `confirmPizza` menuju state `done`. Dikarenakan done adalah state terakhir, maka transisi yang dibuat adalah default transition

![bsb-49](./images/bsb-49.png)

## Simpan bot percakapan

Setelah semua tahapan dilakukan, bot kamu seharusnya akan ditampilkan seperti ini

![bsb-50](./images/bsb-50.png)

Untuk menyimpan, kamu dapat mengakses tombol biru yang berada di sebelah kanan atas.

![bsb-51](./images/bsb-51.png)

Push versi terakhir yang kamu buat dengan menekan pilihan “Patch”

## Deployment Bot

Pada tahap ini, kamu telah selesai membuat bot percakapan. Sekarang kita akan mencoba melakukan deployment pada salah satu channel yaitu **LINE**.

### Membuat deployment

Pertama-tama kita harus membuat sebuah deployment terlebih dahulu. Cari menu “Deployment” pada sidebar kiri kamu.

![bsb-52](./images/bsb-52.png)

Buatlah sebuah deployment dengan nama pizzaChat dan pilih versi 0.0.1. Kamu juga dapat mengikuti gambar dibawah ini

![bsb-53](./images/bsb-53.png)

### Mendaftar akun LINE

Untuk mendaftar akun LINE, kamu harus masuk dalam console developer dari LINE (https://developers.line.me/console/)x

![bsb-54](./images/bsb-54.png)

### Pengaturan channel

Setelah kamu mendaftarkan akun LINE, kamu terlebih dahulu harus masuk dalam console dengan memasukkan username dan password

![bsb-55](./images/bsb-55.png)

Kemudian, kamu harus membuat provider yang dapat diakses pada tautan ini https://developers.line.me/console/register/provider/ dan masukkan nama provider yang kamu inginkan.

![bsb-56](./images/bsb-56.png)

Setelah kamu membuat provider, klik tombol “MessagingAPI” yang berada di kanan halaman.

![bsb-57](./images/bsb-57.png)

Fitur ini berguna untuk menambahkan channel baru. Isi informasi mengenai channel sesuai dengan keinginanmu.

![bsb-58](./images/bsb-58.png)

Mohon diperhatikan bahwa saat mengisi **plan** yang kamu pilih adalah **Developer Trial**.

![bsb-59](./images/bsb-59.png)

Setelah data-data di halaman MessagingAPI sudah kamu isi, tampilan bot akan berubah menjadi terlampir.

![bsb-60](./images/bsb-60.png)

Untuk melihat detail channel, kamu bisa menekan tombol channel. Kemudian, pada detail channel kamu akan melihat Messaging Settings. Pada bagian tersebut, kamu harus melakukan “enable Webhooks” dan klik tombol Issues pada channel access token.

![bsb-61](./images/bsb-61.png)

Tampilan setelah tahapan diatas dilakukan adalah sebagai berikut

![bsb-62](./images/bsb-62.png)

Pada bagian “Using LINE Features”, kamu perlu melakukan nonaktif beberapa fitur pada LINE seperti gambar dibawah ini

![bsb-63](./images/bsb-63.png)

Sekarang channel kamu telah siap dan dapat diintegrasikan dengan bot.

### Deployment pada channel

Pada menu “Deployment”, klik tombol “View channel” untuk melihat list channel yang sudah diintegrasikan. Jika belum ada apapun, berarti bot kamu belum pernah diintegrasikan sebelumnya.

Untuk menambah channel baru, klik tombol “+” pada pojok kanan bawah dari halamanmu. Masukkan nama line dan pilih channel line

![bsb-64](./images/bsb-64.png)

Terdapat isian kosong yang harus kamu isi, maka dari itu kamu harus membuka kembali LINE developer console untuk memasukkan data-data didalamnya.

Channel Access Token dapat kamu temukan disini

![bsb-65](./images/bsb-65.png)

Channel Secret dapat kamu temukan disini

![bsb-66](./images/bsb-66.png)

Kemudian, klik “create” untuk membuat channel dan tampilan akhirnya akan seperti terlampir

![bsb-67](./images/bsb-67.png)

Tahapan terakhir adalah memasukkan webhook yang dibuat dari bot ke LINE. Caranya adalah klik simbol mata pada kolom Action untuk melihat detail dari channel yang dibuat dan salin webhook yang ditampilkan.

![bsb-68](./images/bsb-68.png)

Kemudian, tempel webhook URL tersebut pada LINE console. Klik tombol “verify” untuk mengecek sukses tidaknya keterhubungan dengan channel dalam bot seperti pada gambar dibawah ini.

![bsb-69](./images/bsb-69.png)

Kamu sekarang sudah dapat melakukan percakapan dengan bot. Pada halaman yang sama, cari gambar QR code. Nantinya QR code ini dapat digunakan untuk menambahkan bot buatanmu sebagai teman.

![bsb-70](./images/bsb-70.png)

Setelah kamu sudah menambahkan bot sebagai teman, kirim sebuah pesan yang mengandung kata “pesan”

![bsb-71](./images/bsb-71.png)

Selamat ! Sekarang chat bot mu sudah selesai. Selanjutnya, kita akan mencoba membuat bot dengan NLU yang menggunakan NLStudio

## Menambahkan NLU menggunakan NLStudio

Sebelum memulai, kamu dapat melihat tutorial lebih lengkap dalam membuat NLStudio pada tautan (link tutorial NLStudio). Pada bagian ini, kamu akan membuat NLModel yang dapat mengolah perintah pemesanan pizza. Mari kita mulai.

### Membuat NLU baru

Pada menu utama, klik menu NLU yang berada pada sebelah kiri layar. Kemudian, tampilan menu akan seperti dibawah ini

![bsb-72](./images/bsb-72.png)

Lalu, klik tombol “+” untuk membuat NLU baru dan isi dengan data terlampir

![bsb-73](./images/bsb-73.png)

### Membuat entity `intent`

Setelah kamu membuat NLU baru, kamu harus memasukkan entity. Klik tombol “+” untuk membuat sebuah entity

![bsb-74](./images/bsb-74.png)

Kemudian, buatlah entity dengan data seperti dibawah ini

![bsb-75](./images/bsb-75.png)

Setelah kamu membuat entity, langkah selanjutnya adalah kamu harus melakukan training data dengan memasukkan beberapa kalimat dengan klasifikasi berupa `intent:order`.

### Melakukan data training

Langkah pertama adalah kamu harus masuk terlebih dahulu pada sub-menu “Training”

![bsb-76](./images/bsb-76.png)

Kemudian, pada kolom untuk memasukkan kalimat, masukkan sebuah kalimat seperti “Pesan pizza dong”

![bsb-77](./images/bsb-77.png)

Kemudian, pilih trait `intent:order` dan klik tombol "Train" untuk melatih NLModel yang kamu buat. Tampilan akhir akan seperti dibawah ini

![bsb-78](./images/bsb-78.png)

NLModel akan semakin tepat dalam pemahaman masukkan pengguna dengan melakukan training beberapa kali. Kamu dapat memasukkan kalimat-kalimat seperti dibawah ini untuk melatih NLModel yang kamu buat

![bsb-79](./images/bsb-79.png)

Jika kamu merasa sudah cukup banyak melakukan training dan dirasa NLModel sudah memahami masukkan dari pengguna, kamu dapat mencoba melakukan pengujian dengan menekan tombol “Test NLU” yang berada pada kanan bawah halaman.

![bsb-80](./images/bsb-80.png)

### Integrasi dengan bot studio

Setelah kamu yakin bahwa NLModel yang kamu buat telah menangkap informasi pengguna dengan baik, kamu dapat memulai integrasi NLModel dengan bot yang sudah dibuat sebelumnya.

Untuk memulai, masuk pada menu “Bot” dan klik sub-menu “NLU”. Buat NLU baru dan isikan data seperti gambar terlampir

![bsb-81](./images/bsb-81.png)

Langkah selanjutnya, masuk pada sub-menu “Conversation Flows” dan klik pada tab “Intents”. Pilih “orderTxt” yang sudah kamu buat sebelumnya untuk menangani masukkan dari pengguna dan tambahkan classifier baru seperti dibawah ini

![bsb-82](./images/bsb-82.png)

Klik “Update” untuk menyimpan intent yang sudah diperbaharui.

Selanjutnya, kamu harus mempublikasikan integrasi NLStudio ini dan mengganti versi pada menu “Deployment” untuk mencoba langsung pada perangkat kamu.

---
