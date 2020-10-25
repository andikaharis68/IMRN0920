console.log("=====nomor 1 conditional======")
console.log(" ")
console.log(" ")
var nama = "Jane"
var peran = "Penyihir"

if (nama == " "){
    console.log("nama harus diisi")
}
else if (nama && peran == " ") {
    console.log ("Halo : " + nama + ", pilih peran mu untuk memulai game ")
}
else if (nama== "Jane" && peran== "Penyihir"){
    console.log("selamat Datang di Dunia Werewolf, jane \nHalo Pennyihir Jane, kamu dapat melihat siapa saja yang menjadi werewolf")
}
else if (nama=="Jenita" && peran =="Guard"){
    console.log("Selamat datang di Dunia Werewolf, Jenita Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf.")
}
else if (nama == "Junaedi" && peran == "Werewolf"){
    console.log("Selamat datang di Dunia Werewolf, Junaedi Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!")
}

console.log(" ")

console.log("=====nomor 2 conditional======")

var hari = 21;
var bulan = 1 ;
var tahun = 1945;

var bulanNama;

if(hari >= 1 && hari <=31){
    if(bulan >= 1 && bulan <=12){
        if(tahun >=1900 && tahun <= 2200){
            switch(bulan){
                case 1 :
                    bulanNama ="Januari";
                    break;
                case 2 : 
                    bulanNama ="Februari";
                    break;
                case 3 : 
                    bulanNama= "Maret";
                    break;
                case 4 : 
                    bulanNama= "April";
                    break;
                case 5 : 
                    bulanNama= "Mei";
                    break;
                case 6 : 
                    bulanNama= "Juni";
                    break;
                case 7 : 
                    bulanNama= "Juli";
                    break;
                case 8 : 
                    bulanNama= "Agustus";
                    break;
                case 9 : 
                    bulanNama= "September";
                    break;
                case 10 : 
                    bulanNama= "Oktober";
                    break;
                case 11 : 
                    bulanNama= "November";
                    break;
                case 12 : 
                    bulanNama= "Desember";
                    break;
                default : 
                    break;
            }
            console.log(hari + " " + bulanNama +" " + tahun);
        }else{
            console.log("masukan tahun diantara (1900-2200)");
        }
    } else{
        console.log("masukan bulan diantara (1-12)")
      }
    }else{
        console.log("masukan tanggal diantara (1-30)")
}