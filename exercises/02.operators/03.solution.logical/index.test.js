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

await testStep('tests AND operator', async () => {
	expect(output).toContain('AND')
})

await testStep('tests OR operator', async () => {
	expect(output).toContain('OR')
})

await testStep('tests NOT operator', async () => {
	expect(output).toContain('NOT')
})
