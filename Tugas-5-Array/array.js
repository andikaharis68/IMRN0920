console.log("============== no 1 =============")
function range(startNum, finishNum) {
    hasil = []
    if (startNum < finishNum) {
        for (var i = startNum; i <= finishNum; i++) {
            hasil.push(i)
        }
    } else if (startNum > finishNum) {
        for (var i = startNum; i >= finishNum; i--) {
            hasil.push(i)
        }
    } else {
        hasil.push(-1)
    }
    return hasil
}
console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11, 18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1

console.log("============== no 2 =============")
function rangeWithStep(startNum, finishNum, step) {
    hasil = []
    if (startNum < finishNum) {
        for (var i = startNum; i <= finishNum; i += step) {
            hasil.push(i)
        }
    } else if (startNum > finishNum) {
        for (var i = startNum; i >= finishNum; i -= step) {
            hasil.push(i)
        }
    } else {
        hasil.push(-1)
    }
    return hasil
}
console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 

console.log("============== no 3 =============")
function sum(startNum, finishNum, step = 1) {
    hasil = []
    var total = 0
    if (startNum < finishNum) {
        for (var i = startNum; i <= finishNum; i += step) {
            hasil.push(i)
        }
    } else if (startNum > finishNum) {
        for (var i = startNum; i >= finishNum; i -= step) {
            hasil.push(i)
        }
    } else if (startNum == null && finishNum == null) {
        hasil.push(0)
    } else {
        hasil.push(startNum)
    }
    for (i = 0; i < hasil.length; i++) {
        total += hasil[i];
    }
    return total
}
console.log(sum(1, 10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15, 10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(3)) // 1
console.log(sum()) // 0 

console.log("============== no 4 =============")
function dataHandling(x) {
    for (var i = 0; i < x.length; i++) {
        console.log("Nomor ID: " + x[i][0])
        console.log("Nama Lengkap: " + x[i][1])
        console.log("TTL: " + x[i][2])
        console.log("Hobi: " + x[i][3])
        console.log("")
    }
}
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
dataHandling(input)

console.log("============== no 5 =============")
function balikKata(kata) {
    var hasil = ""
    for (var i = kata.length - 1; i >= 0; i--) {
        hasil += kata[i]
    }
    return hasil
}
console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 

console.log("============== no 6 =============")
function dataHandling2(x) {
    x.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    x.splice(4, 1, "Pria", "SMA Internasional Metro")
    console.log(x)
    var bulan = x[3].split("/")
    switch (bulan[1]) {
        case "01": { console.log("Januari"); break; }
        case "02": { console.log("Februari"); break; }
        case "03": { console.log("Maret"); break; }
        case "04": { console.log("April"); break; }
        case "05": { console.log("Mei"); break; }
        case "06": { console.log("Juni"); break; }
        case "07": { console.log("Juli"); break; }
        case "08": { console.log("Agustus"); break; }
        case "09": { console.log("September"); break; }
        case "10": { console.log("Oktober"); break; }
        case "11": { console.log("November"); break; }
        case "12": { console.log("Desember"); break; }
        default: { console.log('Format Bulan Salah'); }
    }
    bulan.sort(function (a, b) { return b - a });
    console.log(bulan)
    tgl = bulan.join("-")
    console.log(tgl)
    console.log(x[1].slice(0, 15))
}
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
