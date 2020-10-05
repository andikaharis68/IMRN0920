console.log("======== no 1 ========")
function arrayToObject(x) {
    var arr = []
    var now = new Date()
    var thisYear = now.getFullYear()
    for (var i = 0; i < x.length; i++) {
        if (x[i][3] == undefined || x[i][3] > thisYear) {
            arr.push({
                firstName: x[i][0],
                lastName: x[i][1],
                gender: x[i][2],
                age: "Invalid Birth Year"
            })
        } else {
            arr.push({
                firstName: x[i][0],
                lastName: x[i][1],
                gender: x[i][2],
                age: thisYear - x[i][3]
            })
        }
    }
    for (var i = 0; i < arr.length; i++) {
        console.log(i + 1 + ". " + arr[i].firstName + " " + arr[i].lastName + ":")
        console.log(arr[i])
    }
}
var people = [["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"]]
arrayToObject(people)
var people2 = [["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023]]
arrayToObject(people2)


console.log("======== no 2 ========")
function shoppingTime(memberId, money) {
    if (memberId == "") {
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    } else {
        if (money < 50000) {
            return "Mohon maaf, uang tidak cukup"
        } else {
            var c = money
            var barang = []
            var x = 0
            for (var i = 0; i < 5; i++) {
                if (c >= 1500000) {
                    barang.push("Stacattu ")
                    c = c - 1500000
                } else if (c >= 500000) {
                    barang.push("zoro")
                    c = c - 500000
                } else if (c >= 250000) {
                    barang.push("H&N")
                    c = c - 250000
                } else if (c >= 175000) {
                    barang.push("Uniklooh")
                    c = c - 175000
                } else if (c >= 50000 && x == 0) {
                    barang.push("Casing HP")
                    c = c - 50000
                    x = 1
                }
            }
            var hasil = {
                memberId: memberId,
                money: money,
                istPurchased: barang,
                changeMoney: c
            }
            return hasil
        }
    }
}
console.log(shoppingTime('1820RzKrnWn08', 1500000));
console.log(shoppingTime('82Ku8Ma742', 170000));


console.log("======== no 3 ========")
function naikAngkot(list) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    hsl = []
    for (var i = 0; i < list.length; i++) {
        hsl.push({
            penumpang: list[i][0],
            naikDari: list[i][1],
            tujuan: list[i][2],
            bayar: (rute.indexOf(list[i][2]) - rute.indexOf(list[i][1])) * 2000
        })
    }
    return hsl

}
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));