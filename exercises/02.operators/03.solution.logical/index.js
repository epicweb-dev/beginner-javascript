const isLoggedIn = true
const isAdmin = false
const age = 25

console.log('Logged in AND admin:', isLoggedIn && isAdmin)
console.log('Logged in OR admin:', isLoggedIn || isAdmin)
console.log('NOT logged in:', !isLoggedIn)
console.log('Working age:', age > 18 && age < 65)
