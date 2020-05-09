'use strict'

const geraFibonacci = (n) => {
    if (n < 2) return n
    return geraFibonacci(n - 1) + geraFibonacci(n - 2)
}

const fibonacci = () => {
    let array = []
    let indice = 0
    do {
        array.push(geraFibonacci(indice))
        indice++
    } while (array[indice - 1] < 350)
    return array
}

const isFibonnaci = (num) => fibonacci().includes(num)

module.exports = {
    fibonacci,
    isFibonnaci
}
