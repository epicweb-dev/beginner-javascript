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

await testStep('includes number 1', async () => {
	expect(output).toContain('1')
})

await testStep('includes number 5', async () => {
	expect(output).toContain('5')
})

await testStep('includes even number 2', async () => {
	expect(output).toContain('2')
})

await testStep('includes even number 10', async () => {
	expect(output).toContain('10')
})
