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
const saludar = () => console.log('Hola! després de 3 segons')
setTimeout(saludar, 3000)


//---TERNARY---

//Ex 1
const potConduir = (edat) => edat >= 18 ? "Pots conduir" : "No pots conduir"
console.log(potConduir(35))
console.log(potConduir(17))

//Ex 2
let num1 = 10
let num2 = 75

const quinEsMesGran = () => num1 >= num2 ? "El primer número és més gran" : "El segon número és més gran"
console.log(quinEsMesGran())

//Ex 3
//Part 1
const positiuZeroNegatiu = (numero) => numero === 0 ? "És zero" : (numero >= 0 ? "És positiu" : "És negatiu")
console.log(positiuZeroNegatiu(-3), positiuZeroNegatiu(0), positiuZeroNegatiu(12))

//Part 2
const trobarMaxim = (a, b, c) => a >= b && a >= c ? "a és més gran" : (b >= c ? "b és més gran" : "c és més gran")
console.log(trobarMaxim(1, 2, 3), trobarMaxim(3, 2, 1), trobarMaxim(2, 3, 1))

//Ex 4
const parOimpar = (arrayNumeros) => {
    for (let i = 0; i < arrayNumeros.length; i++) {
        console.log(arrayNumeros[i] % 2 === 0 ? "És parell" : "És imparell")
    }
}

parOimpar([1, 2, 3, 4])