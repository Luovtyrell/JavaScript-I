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


//---REST & SPREAD OPERATORS---

//Ex 1 
const array1 = [1, 2, 3, 4, 5, "Conill", "Granota"]
const array2 = [6, 7, 8, 9, "Gat", "Gos"]

const newArray = [...array1, ...array2]

console.log(newArray)

//Ex 2
const suma = (...numeros) => numeros.reduce((total, numero) => total + numero, 0)

console.log(suma(1, 2, 3, 4, 5, 6, 7))

//Ex 3
class Persona {
    constructor(nom, edat) {
        this.nom = nom,
            this.edat = edat
    }
}
const Objecte1 = new Persona("Lucía", 31)
const Objecte2 = { ...Objecte1 }

Objecte2.nom = "Laura"

console.log(Objecte1)

//Ex 4
const arrayElements = [1, "Pera", 2, 3, 4, "Mandarina", "Poma", 23]

const [primerNumero, primeraFruita, ...restElements] = arrayElements

const primerElementArray = primerNumero
const segonElementArray = primeraFruita
const restaElementsArray = restElements

console.log(primerElementArray, segonElementArray, restaElementsArray)

//Ex 5
const laMevaFuncioSpread = (a, b, c) => console.log("paràmetre a", a, "paràmetre b", b, "pàrametre c", c)

const arrayTresElements = ["Casa", "Cotxe", "Tren"]

laMevaFuncioSpread(...arrayTresElements)

//Ex 6 
class Animal {
    constructor(nom, edat, menjarPreferit) {
        this.nom = nom,
            this.edat = edat,
            this.menjarPreferit = menjarPreferit
    }
}

const Conill = new Animal("Totoro", 3, "Dent de Lleó")
const Gat = new Animal("Yami", 4, "Salmó")

const conillGat = { ...Conill, ...Gat }

console.log(conillGat)


//---ARRAY TRANSFORMATIONS---

//Ex 1
const arrayNumerosMap = [1, 2, 3, 4]
const newArrayAlQuadrat = arrayNumerosMap.map(numero => numero ** 2)
console.log(newArrayAlQuadrat)

//Ex 2
const arrayNumerosFilter = [1, 2, 3, 4]
const newArrayNumerosFilter = arrayNumerosFilter.filter(numero => numero % 2 === 0)
console.log(newArrayNumerosFilter)

//Ex 3
const arrayNumerosFind = [1, 10, 8, 11]
const newArrayNumerosFind = arrayNumerosFind.find(numero => numero > 10)
console.log(newArrayNumerosFind)

//Ex 4
const arrayNumerosReduce = [13, 7, 8, 21]
const newArrayNumerosReduce = arrayNumerosReduce.reduce((accumulador, numero) => accumulador + numero)
console.log(newArrayNumerosReduce)

//Ex 5
const arrayMethods = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9]

// //Filtra els nombres majors o iguals a 10
// const arrayMethodsMajorsOiguals10 = arrayMethods.filter(numero => numero > 10 || numero === 10)
// console.log(arrayMethodsMajorsOiguals10)

// //Multiplica cada nombre filtrat per 2
// const arrayFiltratMultiplicat = arrayMethodsMajorsOiguals10.map(numero => numero * 2)
// console.log(arrayFiltratMultiplicat)

// //Calcula la suma dels nombres filtrats i multiplicats per 2
// const arrayFiltratSuma = arrayFiltratMultiplicat.reduce((accumulador, numero)=> accumulador + numero)
// console.log(arrayFiltratSuma)

//Crea la funció en una sola línea i retorna el resultat de la suma:
const sumaMethods = (arrayMethods) => arrayMethods.filter(numero => numero > 10 || numero === 10).map(numero => numero * 2).reduce((accumulador, numero) => accumulador + numero)

console.log(sumaMethods(arrayMethods))

//Ex 6
const arraySomeEvery = [11, 12, 13, 14]

const arraySomeMajors10 = arraySomeEvery.some(numero => numero >= 10)
console.log(arraySomeMajors10)

const arrayEveryMajors10 = arraySomeEvery.every(numero => numero >= 10)
console.log(arrayEveryMajors10)


//---ARRAY LOOPS---

//Ex 1
let noms = ['Anna', 'Bernat', 'Clara']

noms.forEach((nom) => console.log(nom))

//Ex 2
for (let nom of noms) { console.log(nom) }

//Ex 3
let numeros = [1, 2, 3, 4, 5, 6]

const numerosParells = numeros.filter(numero => numero % 2 === 0)
console.log(numerosParells)

//Ex 4
let obj = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' }

for (let propietat in obj) {
    console.log(`${propietat}: ${obj[propietat]}`)
}

//Ex 5
let numerosArray = [1, 2, 3, 4, 5, 6]

for (let numero of numerosArray) {
    console.log(numero)
    if (numero === 5) {
        break
    }
}

//Ex 6
let nomsEstudiants = ['Anna', 'Bernat', 'Clara']
for (let nom of nomsEstudiants.entries()) {
    console.log(nom)
}


//---PROMISES & ASYNC AWAIT---

//Ex 1
const promise = new Promise(function (resolve) {
    setTimeout(() => {
        resolve('Hola món! (promesa després de 2 segons)')
    }, 2000)
}
)

//Ex 2
promise.then(
    function (result) { console.log('Hola, món! (amb .then)') }
)

//Ex 3
let input = 'Hola'
const promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (input === 'Hola') {
            resolve(console.log('Hola, món!'))
        } else {
            reject(console.log('Error'))
        }
    }, 2000)
})

//Ex 4
const promiseAsync = async () => {
    const resposta = await promise
    console.log(resposta)
}
promiseAsync()

//Ex 5
const promiseAsync2 = async () => {
    try {
        const resposta = await promise
        console.log(resposta)
    } catch (error) {
        console.log('Error:', error)
    }
}

promiseAsync2()

//Ex 6
const promesa1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Primera promesa resolta després de 2 segons')
    }, 2000)
})

const promesa2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Segona promesa resolta després de 3 segons')
    }, 3000)
})

Promise.all([promesa1, promesa2])
    .then((resultats) => {
        console.log('Promeses resoltes correctament:', resultats)
    })
    .catch((error) => {
        console.error('Error', error);
    })