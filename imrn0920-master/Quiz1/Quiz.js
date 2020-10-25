function balikString(kata) {
    // function balikString(kata) {
  // var oldKata = kata;
  var panjangKata = kata.length;
  var newKata = "";
  for (var i = panjangKata - 1; i >= 0; i--){
    newKata += kata[i]
  }
  return  newKata
  // Silakan tulis code kamu di sini
}

// TEST CASES BalikString
console.log("===Soal 1===") // ijah
console.log(balikString("abcde")) // edcba
console.log(balikString("rusak")) // kasur
console.log(balikString("racecar")) // racecar
console.log(balikString("haji")) // ijah

function palindrome(kata) {
    // Silakan tulis code kamu di sini
    var oldKata = kata;
    var panjangKata = kata.length;
    var newKata = "";
    for (var i = panjangKata - 1; i >= 0; i--) {
      newKata += kata[i]
    }
    return  oldKata == newKata
    // Silakan tulis code kamu di sini
  }
  
  // TEST CASES Palindrome
  console.log("===Soal 2===") 
  console.log(palindrome("kasur rusak")) // true
  console.log(palindrome("haji ijah")) // true
  console.log(palindrome("nabasan")) // false
  console.log(palindrome("nababan")) // true
  console.log(palindrome("jakarta")) // false
  //

  console.log("===Soal 3===") 

  function DescendingTen(num) {
    // Tulis code kamu di sini
    if (!num) {
      return -1
    }
  
    var number = num.toString(); // 100
    for (var i = 1; i <= 9; i++) { // i = 1
      var add = num - i; // 100 - 1 = 99
      number = number + ' ' + add.toString() // 100 99
    }
  
    return number
  }
  
  // TEST CASES Descending Ten
  console.log(DescendingTen(100)) // 100 99 98 97 96 95 94 93 92 91
  console.log(DescendingTen(10)) // 10 9 8 7 6 5 4 3 2 1
  console.log(DescendingTen()) // -1
  // Papan Ular Tangga (35)
// Buatlah sebuah function ularTangga yang ketika function tersebut dipanggil 
// akan menampilkan papan ular tangga ukuran 10 x 10. 

// Output: 
// 100 99 98 97 96 95 94 93 92 91 // baris ke 1
// 81 82 83 84 85 86 87 88 89 90 // baris ke 2
// 80 79 78 77 76 75 74 73 72 71 // baris ke 3
// 61 62 63 64 65 66 67 68 69 70 // baris ke 4
// 60 59 58 57 56 55 54 53 52 51
// 41 42 43 44 45 46 47 48 49 50
// 40 39 38 37 36 35 34 33 32 31
// 21 22 23 24 25 26 27 28 29 30
// 20 19 18 17 16 15 14 13 12 11
// 1 2 3 4 5 6 7 8 9 10
console.log("===soal 4 ===")
function ularTangga() {
    // Tulis code kamu di sini
    // var panjang = 10;
    // var lebar = 10;
    // var totalPapan = panjang * lebar;
  
    var totalPapan = 100;
  
    var reference = totalPapan; // yang akan dijadikan reference pada fungsi Asc dan Dsc
    var number = reference.toString(); // yang akan ditampilkan di log;
  
    for (var j = 1; j <= 10; j++) {
      if (j % 2 == 1) {
        for (var i = 1; i <= 9; i++) {
          reference = reference - 1;
          number = number + ' ' + reference.toString()
        }
      } else if (j % 2 == 0) {
        for (i = 1; i <= 9; i++) {
          reference = reference + 1;
          number = number + ' ' + reference.toString()
        }
      }
  
      if (j != 10) {
        number += '\n'
        reference -= 10
        number += ' ' + reference.toString()
      }
    }
  
  
    // //mulai dari 100 ke 91
    // for (var i = 1; i <= 9; i++) {
    //   reference = reference - 1;
    //   number = number + ' ' + reference.toString()
    
    // }
  
    // number += '\n'
    // reference -= 10;
    // number += ' ' + reference.toString()
  
    // // dari 81 ke 90
    // for (i = 1; i <= 9; i++) {
    //   reference = reference + 1;
    //   number = number + ' ' + reference.toString()
    // }
  
    // number += '\n'
    // reference -= 10
    // number += ' ' + reference.toString()
  
    // // dari 80 - 71
    // for (var i = 1; i <= 9; i++) {
    //   reference = reference - 1;
    //   number = number + ' ' + reference.toString()
    // }
  
    // number += '\n'
    // reference -= 10;
    // number += ' ' + reference.toString()
  
    // // dari 61 - 70
    // for (i = 1; i <= 9; i++) {
    //   reference = reference + 1;
    //   number = number + ' ' + reference.toString()
    // }
  
    // number += '\n'
    // reference -= 10;
    // number += ' ' + reference.toString()
  
    return number
  }
  
  // TEST CASE Ular Tangga
  console.log(ularTangga())
  