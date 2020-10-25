/**
 * Berikut soal quiz kali ini, terdiri dari 3 Soal
 * Kerjakan dengan sebaik mungkin, dengan menggunakan metode yang telah dipelajari,
 * Tidak diperkenankan untuk menjawab hanya dengan console.log('teks jawaban');
 * maupun dengan terlebih dahulu memasukkannya ke dalam variabel, misal var a = 'teks jawaban'; console.log(a);
 * 
 * Terdapat tambahan poin pada setiap soal yang dikerjakan menggunakan sintaks ES6 (+5 poin)
 * Jika total nilai Anda melebihi 100 (nilai pilihan ganda + coding), tetap akan memiliki nilai akhir yaitu 100
 * 
 * Selamat mengerjakan
*/

/*========================================== 
  1. SOAL CLASS SCORE (10 poin + 5 Poin ES6)
  ==========================================
  Buatlah sebuah class dengan nama Score. class Score tersebut memiliki properti "subject", "points", dan "email". 
  "points" dapat di input berupa number (1 nilai) atau array of number (banyak nilai).
  tambahkan method average untuk menghitung rata-rata dari parameter points ketika yang di input berupa array (lebih dari 1 nilai)
*/

class Score {
    // Code disini
    constructor(subject, email, points){
        this.subject = subject
        this.email = email
        this.points = points
    }

    average () {
        let totalPoint = 0;
        for (let i = 0; i< this.points.length; i++){
            totalPoint += this.points[i]
        }
        return (totalPoint / this.points.length).toFixed(1)
    }
  }
  
  /*=========================================== 
    2. SOAL Create Score (10 Poin + 5 Poin ES6)
    ===========================================
    Membuat function viewScores yang menerima parameter data berupa array multidimensi dan subject berupa string
    Function viewScores mengolah data email dan nilai skor pada parameter array 
    lalu mengembalikan data array yang berisi object yang dibuat dari class Score.
    Contoh: 
  
    Input
     
    data : 
    [
      ["email", "quiz-1", "quiz-2", "quiz-3"],
      ["abduh@mail.com", 78, 89, 90],
      ["khairun@mail.com", 95, 85, 88]
    ]
    subject: "quiz-1"
  
    Output 
    [
      {email: "abduh@mail.com", subject: "quiz-1", points: 78},
      {email: "khairun@mail.com", subject: "quiz-1", points: 95},
    ]
  */
  
  const data = [
    ["email", "quiz - 1", "quiz - 2", "quiz - 3"],
    ["abduh@mail.com", 78, 89, 90],
    ["khairun@mail.com", 95, 85, 88],
    ["bondra@mail.com", 70, 75, 78],
    ["regi@mail.com", 91, 89, 93]
  ]
  
  function viewScores(data, subject) {
    // code kamu di sini

    let scoreArr = []
    let subjectIndex;
    switch (subject){
        case "quiz-1":
            subjectIndex = 1
            break;
        case "quiz-2":
            subjectIndex= 2
            break;
        case "quiz-3":
            subjectIndex = 3
            break;
        default:
            break;
    }
    for(let i = 1; i<data.length; i++){
        const score = new Score (subject, data[i][0], data[i][subjectIndex] )
        scoreArr.push(score)
    }
    console.log(scoreArr)
  }
  
  // TEST CASE
  viewScores(data, "quiz-1")
  viewScores(data, "quiz-2")
  viewScores(data, "quiz-3")
  
  /*==========================================
    3. SOAL Recap Score (15 Poin + 5 Poin ES6)
    ==========================================
      Buatlah fungsi recapScore yang menampilkan perolehan nilai semua student. 
      Data yang ditampilkan adalah email user, nilai rata-rata, dan predikat kelulusan. 
      predikat kelulusan ditentukan dari aturan berikut:
      nilai > 70 "participant"
      nilai > 80 "graduate"
      nilai > 90 "honour"
  
      output:
      1. Email: abduh@mail.com
      Rata-rata: 85.7
      Predikat: graduate
  
      2. Email: khairun@mail.com
      Rata-rata: 89.3
      Predikat: graduate
  
      3. Email: bondra@mail.com
      Rata-rata: 74.3
      Predikat: participant
  
      4. Email: regi@mail.com
      Rata-rata: 91
      Predikat: honour
  
  */
  
  function recapScores(data) {
    // code kamu di sini
    let recapArr = []
    for (let i = 1; i<data.length; i++){
        const [email, ...nilai] = data [i]
        const score = new Score("Recap", data[i][0], nilai)
        const rata2 = score.average()

        let predikat;
        if(rata2 > 90){
            predikat = "honour"
        }else if( rata2 > 80){
            predikat ="graduate"
        } else if( rata2 > 70){
            predikat = "participant"
        }

        const template = ` ${i}. Email: ${score.email} Rata-rata: ${rata2} predikat: ${predikat}`

        console.log(template)
    }
  }
  
  recapScores(data);