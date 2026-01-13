const numbers = [1, 2, 3, 4, 5]

console.log('forEach - each doubled:')
numbers.forEach((num) => console.log(num * 2))

const doubled = numbers.map((num) => num * 2)
const evens = numbers.filter((num) => num % 2 === 0)

console.log('Doubled:', doubled)
console.log('Evens:', evens)
