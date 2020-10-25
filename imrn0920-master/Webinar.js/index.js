// class kendaraan {
//     constructor(brand, factory){
//         this.brand = brand 
//         this.factory = factory
//     }
// }
// var kendaraan = class {
//     constructor(brand, factory){
//         this.brand
//         this.factory
//     }
// }
// console.log(kendaraan.name)
// var kendaraan = class kendaraan2 {
//     constructor(brand, factory){
//         this.brand= brand
//         this.facto= factory
//     }
// }
// console.log(kendaraan.name)

// class SportCar {
//     constructor(){

//     }
// }

// class sportcar{
//     constructor(){

//     }
// }

// class SportCar{
//     constructor(brand){
//         this.carname = brand
//     }
//     present(x){
//         return x +", i have a car brand is " + this.carname;
//     }
// }
// mycar = new SportCar ("Ford");
// console.log(mycar.present("hello"))

// class SportCar{
//     constructor(brand){
//         this.carname = brand
//     }
//     present () {
//         return 'i have a ' + this.carname;
//     }
// }
// // mycar = new SportCar ("Ford");
// class Model extends SportCar {
//     constructor(brand, mod){
//         super(brand);
//         this.model= mod
//     }

//     show(){
//         return this.present() + ', it is a '+ this.model;
//     }
// }

// mysupercar = new Model ("Honda","Sport Car");
// console.log(mysupercar.show())

// console.log("Getter dan Setter")

// class Motor {
//     constructor(merk){
//         this.merkmotor = merk
//     }
//     get cnam(){
//         return this.merkmotor;
//     }
//     set cnam(x){
//         this.merkmotor= x;
//     }    
// }
// mymotor = new Motor ("Yamaha");
// console.log(mymotor.cnam);


ayam =() =>{
    return {
        radius,
        draw(){
            console.log("draw")
        }
    }

}

circle=(ayam)=>{
    this.ayam = ayam;
    this.draw = ()=>{
        console.log('draw')
    }
}

console.log(circle(ayam))