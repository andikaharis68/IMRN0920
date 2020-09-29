console.log("==========  No 1  ==============")
var nama = "Andika"
var peran = "Werewolf"
if (nama == "" && peran == "") {
    console.log("Nama harus diisi!")
} else {
    if (peran == "") {
        console.log("Halo " + nama + ", Pilih Peranmu untuk memulai game")
    } else {
        console.log("Selamat datang di Dunia Werewolf, " + nama)
        if (peran == "Penyihir") {
            console.log("Halo " + peran + " " + nama + ", kamu dapat melihat siapa yang menjadi werewolf!")
        }
        if (peran == "Guard") {
            console.log("Halo " + peran + " " + nama + ", kamu akan membantu melindungi temanmu dari serangan werewolf.")
        }
        if (peran == "Werewolf") {
            console.log("Halo " + peran + " " + nama + ", Kamu akan memakan mangsa setiap malam!")
        }
    }
}

console.log("==========  No 2  ==============")
var hari = 21;
var tahun = 1996;

var bulan = 10;
switch (bulan) {
    case 1: { console.log(hari + " " + "Januari" + " " + tahun); break; }
    case 2: { console.log(hari + " " + "Februari" + " " + tahun); break; }
    case 3: { console.log(hari + " " + "Maret" + " " + tahun); break; }
    case 4: { console.log(hari + " " + "April" + " " + tahun); break; }
    case 5: { console.log(hari + " " + "Mei" + " " + tahun); break; }
    case 6: { console.log(hari + " " + "Juni" + " " + tahun); break; }
    case 7: { console.log(hari + " " + "Juli" + " " + tahun); break; }
    case 8: { console.log(hari + " " + "Agustus" + " " + tahun); break; }
    case 9: { console.log(hari + " " + "September" + " " + tahun); break; }
    case 10: { console.log(hari + " " + "Oktober" + " " + tahun); break; }
    case 11: { console.log(hari + " " + "November" + " " + tahun); break; }
    case 12: { console.log(hari + " " + "Desember" + " " + tahun); break; }
    default: { console.log('Format Bulan Salah'); }
}