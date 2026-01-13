const tasks = ['Learn JavaScript', 'Build project']

tasks.push('Deploy app')
tasks.unshift('Plan features')

console.log('Length:', tasks.length)
console.log('Has Learn JavaScript:', tasks.includes('Learn JavaScript'))

const removed = tasks.pop()
console.log('Removed:', removed)

console.log('Final tasks:', tasks)
