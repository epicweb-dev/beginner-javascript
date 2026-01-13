// Numbers 1 through 5
console.log('Numbers 1-5:')
let i = 1
while (i <= 5) {
	console.log(i)
	i++
}

// Sum of 1 through 10
let sum = 0
let num = 1
while (num <= 10) {
	sum += num
	num++
}
console.log('Sum of 1-10:', sum)

// First divisor of 100 greater than 1
let divisor = 2
while (100 % divisor !== 0) {
	divisor++
}
console.log('First divisor of 100:', divisor)
