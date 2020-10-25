console.log("===function===")
console.log("===No 1===")
console.log("")

function teriak() {
    return "Halo Sanbers!"
}
console.log(teriak())
console.log(" ")
console.log(" ")
console.log("===No 2===")
console.log(" ")
console.log(" ")

function kalikan (x, y){
    return x * y
}
var num1 = 12
var num2 = 4
var hasilPerkalian = kalikan(num1, num2)
console.log(hasilPerkalian);

console.log(" ")
console.log(" ")

console.log("===No 3===")
console.log(" ")
console.log(" ")
/* 
    Tulis kode function di sini
*/

function introduce (name, age, address, hobby){
    var kalimat = "Nama saya adalah " + " "+ name + "usia saya " + " "+ age +" "+ "alamat saya "+" "+ address +"dan juga hobby saya adalah "+" "+ hobby+ "!"
    return kalimat
}
 
var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogyakarta"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogyakarta, dan saya punya hobby yaitu Gaming!" 


console.log(" ")
console.log(" ")