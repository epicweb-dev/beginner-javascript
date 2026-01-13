const person = {
	firstName: 'John',
	lastName: 'Doe',
	getFullName() {
		return this.firstName + ' ' + this.lastName
	},
	greet() {
		return "Hello, I'm " + this.getFullName() + '!'
	},
}

console.log(person.getFullName())
console.log(person.greet())
