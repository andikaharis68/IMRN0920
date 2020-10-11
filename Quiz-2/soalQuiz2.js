console.log("======== No 1 ========")
class Score {
    constructor(subject, points, email) {
        this.subject = subject
        this.points = points
        this.email = email
    }
    average() {
        let tot = 1
        for (let i = 0; i < this.points.length; i++) {
            tot *= this.points[i]
        }
        return tot / this.points.length
    }
}
myScore = new Score("Andika", [2, 3, 10, 2], "oke")
console.log(myScore.average())


console.log("======== No 2 ========")
const data = [
    ["Email", "quiz - 1", "quiz - 2", "quiz - 3"],
    ["abduh@mail.com", 78, 89, 90],
    ["khairun@mail.com", 95, 85, 88],
    ["bondra@mail.com", 70, 75, 78],
    ["regi@mail.com", 91, 89, 93]
]
const viewScores = (arr, sub) => {
    let data = []
    if (sub == "quiz-1") {
        for (let i = 1; i < arr.length; i++) {
            let data1 = {
                email: arr[i][0],
                subject: arr[0][1],
                point: arr[i][1]
            }
            data.push(data1)
        }
    } else if (sub == "quiz-2") {
        for (let i = 1; i < arr.length; i++) {
            let data2 = {
                email: arr[i][0],
                subject: arr[0][2],
                point: arr[i][2]
            }
            data.push(data2)
        }
    } else if (sub == "quiz-3") {
        for (let i = 1; i < arr.length; i++) {
            let data3 = {
                email: arr[i][0],
                subject: arr[0][3],
                point: arr[i][3]
            }
            data.push(data3)
        }
    }
    console.log(data)
}
viewScores(data, "quiz-1")
viewScores(data, "quiz-2")
viewScores(data, "quiz-3")


console.log("======== No 3 ========")
const recapScores = (data) => {
    let rata2 = []
    for (let i = 1; i < data.length; i++) {
        let x = (data[i][1] + data[i][2] + data[i][3]) / 3
        rata2.push(x.toFixed(1))
    }
    for (let i = 1; i < data.length; i++) {
        let predikat = ""
        if (rata2[i - 1] > 70 && rata2[i - 1] <= 80) {
            predikat = "participant"
        } else if (rata2[i - 1] > 80 && rata2[i - 1] <= 90) {
            predikat = "graduate"
        } else if (rata2[i - 1] > 90) {
            predikat = "honour"
        }
        let hasil = `${i}. ${data[0][0]}: ${data[i][0]} ${"\n"}Rata-rata: ${rata2[i - 1]}${"\n"}Predikat: ${predikat} ${"\n"}`
        console.log(hasil)
    }
}
recapScores(data);