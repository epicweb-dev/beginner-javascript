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

await testStep('logs full name using template literal', async () => {
	expect(output).toContain('Full name')
})

await testStep('logs bio with interpolation', async () => {
	expect(output).toContain('Bio')
	expect(output).toMatch(/\d+/)
})

await testStep('logs multi-line address', async () => {
	expect(output).toContain('Address')
})

await testStep('demonstrates math in templates', async () => {
	expect(output).toContain('2 + 2 = 4')
})
