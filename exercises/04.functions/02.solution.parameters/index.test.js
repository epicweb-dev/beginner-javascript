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

await testStep('greetPerson returns a greeting', async () => {
	expect(output).toContain('Hello')
})

await testStep('multiply(4, 5) returns 20', async () => {
	expect(output).toContain('20')
})

await testStep('isEven returns boolean', async () => {
	expect(output).toMatch(/true|false/)
})
