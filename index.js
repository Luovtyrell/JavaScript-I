//---ARROW FUNCTIONS---

//Ex 1
const add = (a, b) => a + b
console.log(add(1, 2))

//Ex 2
const randomNumber = () => Math.random() * 100
console.log(randomNumber())


//Ex 3
class Person {
    constructor(name) {
        this.name = name
    }
    greet = () => console.log(`Hola, ${this.name}`)
}
const PERSONA1 = new Person("Lucia")

PERSONA1.greet()

//Ex 4
const printNumbers = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
    }
}

printNumbers([2, 8, 9, 12])

//Ex 5
const saludar = () => console.log('Hola!')
const miTimeOut = setTimeout(saludar, 3000)


