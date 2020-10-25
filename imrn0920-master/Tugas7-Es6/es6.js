console.log("===nomor 1===")
console.log("merubah function ke arrow function")
const golden = () =>{
    console.log("this is golden!!")
}

golden();

console.log("===nomor 2====")
console.log("object literal")

const newFunction = (firstName, lastName) =>{
    return {
        firstName,lastName,
        fullName(){
            console.log(firstName + " "+ lastName)
            return
        }
    }
}
newFunction("william","imoh").fullName()

console.log("===nomor 3 ====")

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }
const { firstName, lastName, destination, occupation, spell} = newObject

console.log(firstName, lastName, destination, occupation, spell)

console.log("===nomor 4 ===")
console.log("combined array")

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]


const combined = [...west, ...east]
console.log(combined)

console.log("===nomor 5 ===")
console.log("template literal")

const planet = "earth"
const view = "glass"
var before = `Lorem  ${view} dolor sit amet,  
    consectetur adipiscing elit, ${planet} do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam` 
// Driver Code
console.log(before) 