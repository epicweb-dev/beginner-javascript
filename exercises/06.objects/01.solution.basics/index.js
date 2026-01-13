const book = {
	title: 'The Great Gatsby',
	author: 'F. Scott Fitzgerald',
	year: 1925,
	isRead: false,
}

console.log('Title:', book.title)
console.log('Author:', book['author'])

book.isRead = true
book.rating = 5

console.log('Updated book:', book)
