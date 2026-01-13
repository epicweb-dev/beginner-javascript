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

await testStep('logs a string type', async () => {
	expect(output).toContain('string')
})

await testStep('logs a number type', async () => {
	expect(output).toContain('number')
})

await testStep('logs a boolean type', async () => {
	expect(output).toContain('boolean')
})
