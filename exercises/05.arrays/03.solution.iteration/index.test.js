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

await testStep('logs doubled array from map', async () => {
	expect(output).toContain('Doubled')
})

await testStep('logs filtered even numbers', async () => {
	expect(output).toContain('Evens')
})
