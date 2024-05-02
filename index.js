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
const PERSONA1 = new Person("Lucía")

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


//---TERNARY OPERATOR---

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


//---CALLBACKS---

//Ex 1
const processar = (numero, callback) => {
    callback(numero)
}
processar(1, (result) => console.log(`El numero del callback és ${result}`))

//Ex 2
const calculadora = (numero1, numero2, callback) => {
    callback(numero1 + numero2)
}

calculadora(2, 3, (resultatSuma) => console.log(`El resultat de la suma és ${resultatSuma}`))

//Ex 3
const esperarIsaludar = (nom, callback) => {
    setTimeout(() => callback(nom), 2000)
}
esperarIsaludar("Àlex", (resultatEsperarIsaludar) => console.log(`Hola, ${resultatEsperarIsaludar} (després 2 segons)`))

//Ex 4
const processarElements = (array, callback) => array.forEach(callback)
const mostrarElements = elements => console.log(`Processar: ${elements}`)

processarElements(["Element 1", "Element 2", "Element 3"], mostrarElements)


//Ex 5
const processarCadena = (arrayStrings, callback) => {
    const stringMajuscules = arrayStrings.map(string => string.toUpperCase())
    callback(stringMajuscules)
}

processarCadena(["hola", "adeu", "fins després"], (resultatStringMajuscula) => console.log(resultatStringMajuscula))