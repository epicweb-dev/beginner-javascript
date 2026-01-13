const colors = ['red', 'green', 'blue', 'yellow']

console.log('Colors:')
for (const color of colors) {
	console.log(color)
}

const numbers = [10, 20, 30, 40, 50]

// Calculate sum
let sum = 0
for (const num of numbers) {
	sum += num
}
console.log('Sum:', sum)

// Find largest number
let max = numbers[0]
for (const num of numbers) {
	if (num > max) {
		max = num
	}
}
console.log('Largest:', max)
