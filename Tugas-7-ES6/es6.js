console.log("====== No 1 ======")
const golden = () => {
    console.log("this is golden!!")
}
golden()

console.log("====== No 2 ======")
const newFunction = (firstName, lastName) => {
    return {
        fullName() {
            console.log(firstName + " " + lastName)
            return
        }
    }
}
newFunction("William", "Imoh").fullName()

console.log("====== No 3 ======")
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
const { firstName, lastName, destination, occupation } = newObject
console.log(firstName, lastName, destination, occupation)

console.log("====== No 4 ======")
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
console.log(combined)

console.log("====== No 5 ======")
const planet = "earth"
const view = "glass"
var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
console.log(before) 