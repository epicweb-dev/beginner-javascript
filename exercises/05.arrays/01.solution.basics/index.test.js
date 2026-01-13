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

await testStep('logs the first element', async () => {
	expect(output).toContain('First')
})

await testStep('logs the last element', async () => {
	expect(output).toContain('Last')
})

await testStep('logs the updated array', async () => {
	expect(output).toContain('Updated')
})
