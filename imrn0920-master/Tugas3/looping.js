console.log("=====no 1 ======");
console.log("==looping up==");

var i = 2;
while(i<=20){
  console.log(i);
  i+=2;
};
console.log("==looping down==");
var i = 20;
while(i>2){
  console.log(i);
  i-=2;
}

console.log("====soal 2 ====")
var santai = " - Santai"
var berkualitas = " - Berkualitas"
var loveCoding = " - I Love Coding"
for (i = 1; i <= 20; i++) {
  if (i % 2 != 1) {
    console.log(i + berkualitas)
  } else if (i % 3 == 0) {
    console.log(i + loveCoding)
  } else {
    console.log(i + santai)
  }
}

console.log("====soal 3 ====")
var i = 1;
var j = 1;
var panjang = 8;
var lebar = 4;
var pagar = '';

while (j <= lebar) { // 9 <= 8
  while (i <= panjang) { // 1 <= 4
    pagar += '#';
    i++;
  }
  console.log(pagar); // ####
  pagar = ''; // ""
  i = 1; // ""
  j++;
}

console.log("=====soal 4 ====")

i = 1;
j = 1;
var alas = 7;
var tinggi = 7;
var pagar = "";

for (i = 1; i <= tinggi; i++) {
  for (j = 1; j <= i; j++) {
    pagar += "#";
  }
  console.log(pagar)
  pagar = "";
}
console.log("=====soal 5 ====")
i = 1;
j = 1;
var panjang = 8;
var lebar = 8;
var papan = "";
for (j = 1; j <= lebar; j++) {
  if (j % 2 == 1) {
    for (i = 1; i <= panjang; i++) {
      if (i % 2 == 1) {
        papan += " "
      } else {
        papan += "#"
      }
    }
  } else {
    for (i = 1; i <= panjang; i++) {
      if (i % 2 == 1) {
        papan += "#"
      } else {
        papan += " "
      }
    }
  }
  console.log(papan);
  papan = "";
}
