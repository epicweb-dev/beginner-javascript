const user = {
	username: 'johndoe',
	email: 'john@example.com',
	isAdmin: false,
}

const { username, email } = user

const scores = [95, 87, 92]
const [firstScore, secondScore] = scores

console.log('Username:', username)
console.log('Email:', email)
console.log('First score:', firstScore)
console.log('Second score:', secondScore)
