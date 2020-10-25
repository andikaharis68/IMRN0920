// console.log("===soal 1 ===")

// function range (startNum, finishNum) {
//     var rangeArr = [];

//     if (startNum > finishNum){
//         var rangeLength = startNum - finishNum + 1;
//         for (var i = 0; i< rangeLength; i++){
//             rangeArr.push(startNum - i)
//         }
//     }else if (startNum < finishNum){
//         var rangeLength = finishNum - startNum + 1 ;
//         for (var i = 0; i< rangeLength; i++){
//             rangeArr.push(startNum + i)
//         }
//     }else if (!startNum || !finishNum){
//         return -1
//     }
//     return rangeArr
// }
// console.log("=====test ======")
// console.log(range(1,10))
// console.log(range(18,11))
// console.log(range(11,18))
// console.log(range(1))
// console.log(range())


// console.log("===soal 2 ===")
//  function rangeWithStep (startNum, finishNum, step){
//      var rangeArr = [];
//      if (startNum > finishNum){
//          var currentNum = startNum;
//          for (var i = 0; currentNum >= finishNum; i++){
//              rangeArr.push(currentNum)
//              currentNum -= step
//          }
//      }else if (startNum < finishNum){
//          var currentNum = startNum;
//          for(var i = 0; currentNum <= finishNum; i++){
//              rangeArr.push(currentNum)
//              currentNum += step
//          }
//      }else if( !startNum || !finishNum || step){
//          return -1
//      }

//      return rangeArr

//  }

// console.log("=====test case 2 ======")
// console.log(rangeWithStep(1,10,2))
// console.log(rangeWithStep(10,1,2))
// console.log(rangeWithStep())
// console.log("===soal 3 ===")
// //code disini
// function sum(startNum, finishNum, step){
//     var rangeArr = [ ];
//     var distance;

//     if(!step){
//         distance=1
//     }else {
//         distance = step
//     }

//     if(startNum > finishNum){
//         var currentNum = startNum;
//         for (var i = 0; currentNum >=finishNum; i++){
//             rangeArr.push(currentNum)
//             currentNum -= distance
//         }
//     }else if(startNum < finishNum){
//         var currentNum = startNum;
//         for (var i = 0; currentNum <=finishNum; i++){
//             rangeArr.push(currentNum)
//             currentNum += distance
//         }
//     } else if(!startNum && !finishNum && !step){
//         return 0
        
//     } else if (startNum){
//         return startNum
//     }

//     var total = 0;
//     for (var i = 0; i< rangeArr.length; i++){
//         total= total + rangeArr[i]
//     }
//     return total

// }



// console.log("==test case==")
// console.log(sum(1,10)) // 55
// console.log(sum(5, 50, 2)) // 621
// console.log(sum(15,10)) // 75
// console.log(sum(20, 10, 2)) // 90
// console.log(sum(1)) // 1
// console.log(sum()) // 0 
// console.log("===soal 4 ===")

// var input = [
//     ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//     ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//     ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
//     ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
// ] 

// function dataHandling (data){
//     var dataLength = data.length
//     for (var i=0; i<dataLength; i++){
//         var id = "Nomor Id :" + data[i][0]
//         var nama = "Nama Lengkap : " + data[i][1]
//         var ttl = "TTL: " + data[i][2] + " " + data[i][3]
//         var hobi = "Hobi : " + data[i][4]

//         console.log(id)
//         console.log(nama)
//         console.log(ttl)
//         console.log(hobi)
//     }
// }

// console.log("=====test case soal 4=====")
// dataHandling(input)
// console.log("===soal 5 ===")

// function balikKata (kata){
//     var kataBaru =" ";
//     for (var i = kata.length-1; i >= 0; i--){
//         kataBaru += kata[i]
//     }
//     return kataBaru;
// }

// console.log("Test Case soal nomor 5")
// console.log(balikKata("Kasur Rusak")) // kasuR rusaK
// console.log(balikKata("SanberCode")) // edoCrebnaS
// console.log(balikKata("Haji Ijah")) // hajI ijaH
// console.log(balikKata("racecar")) // racecar
// console.log(balikKata("I am Sanbers")) // srebnaS ma I 

console.log("=====Soal nomor 6=====")

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  
dataHandling2(input);

function dataHandling2(data){
    var newData = data
    var newName = data[1] + "Elsharawy"
    var newProvince ="Provinsi" + data[2]
    var gender ="Pria"
    var institusi = "SMA International Metro"

    newData.splice(1, 1, newName)
    newData.splice(2, 1, newProvince)
    newData.splice(4, 1, gender, institusi)

    var arrDate = data [3]
    var newDate = arrDate.split('/')
    var monthNum = newDate[1]
    var monthname=" "

    switch( monthNum){
    case "01":
        monthname ="Januari"
        break;
    case "02":
        monthname ="Februari"
        break;
    case "03":
        monthname ="Maret"
        break;
    case "04":
        monthname ="April"
        break;
    case "05":
        monthname ="Mei"
        break;
    case "06":
        monthname ="Juni"
        break;
    case "07":
        monthname ="Juli"
        break;
    case "08":
        monthname ="Agustus"
        break;
    case "09":
        monthname ="September"
        break;
    case "10":
        monthname ="Oktober"
        break;
    case "11":
        monthname ="November"
        break;
    case "12":
        monthname ="Desember"
        break;
    default:
        break;
    }

    var dateJoin = newDate.join("-")
    var dateArr = newDate.sort(function(value1, value2){
        value2- value1
    })
    var editName= newName.slice(0, 15)
    console.log(newData)

    console.log(monthname)
    console.log(dateArr)
    console.log(dateJoin)
    console.log(editName)
}