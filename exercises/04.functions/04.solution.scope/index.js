const globalMessage = "I'm global!"

function showMessages() {
	const localMessage = "I'm local!"
	console.log(globalMessage) // Can access global
	console.log(localMessage) // Can access local
}

showMessages()

console.log(globalMessage) // Works - globalMessage is global

// console.log(localMessage) // Error! localMessage is not defined
// Uncomment the line above to see the error
