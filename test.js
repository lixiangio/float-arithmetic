let arithmetic = require('./index')

let value = arithmetic(3, '+', 0.1, '/', 0.05, '/', 2)

// let v = ((((3 * 100) * (0.2 * 100)) / 100) + (5 * 100) - (((0.2 * 100) / (0.5 * 100)) * 100)) / 100

let v = ((0.1 * 100) + (0.2 * 100)) / 100

console.log(v)

// console.log(3 + 0.1 - 0.1 / 0.05 / 2)