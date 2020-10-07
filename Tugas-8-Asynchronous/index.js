var readBooks = require('./callback.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]
//Tulis code untuk memanggil function readBooks di sini
var i = 0
function buku(durasi, daftarBuku) {
    readBooks(durasi, daftarBuku[i], function (sisaDurasi) {
        i++
        if (daftarBuku[i] != undefined && sisaDurasi > 0) {
            buku(sisaDurasi, books)
        }
    })
}

buku(10000, books)
