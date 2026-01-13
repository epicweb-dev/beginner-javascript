import { testStep, expect } from '@epic-web/workshop-utils/test'

// Capture console.log output
const logs = []
const originalLog = console.log
console.log = (...args) => {
	logs.push(args.join(' '))
	originalLog.apply(console, args)
}

await import('./index.js')

console.log = originalLog

const output = logs.join(' ')

await testStep('logs the title', async () => {
	expect(output).toContain('Title')
})

await testStep('logs the author', async () => {
	expect(output).toContain('Author')
})

await testStep('logs the updated object', async () => {
	expect(output).toContain('Updated')
})
