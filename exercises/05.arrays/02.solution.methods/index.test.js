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

await testStep('logs array length', async () => {
	expect(output).toContain('Length')
})

await testStep('checks if element exists with includes', async () => {
	expect(output).toMatch(/true|Has/i)
})

await testStep('logs removed element', async () => {
	expect(output).toContain('Removed')
})
