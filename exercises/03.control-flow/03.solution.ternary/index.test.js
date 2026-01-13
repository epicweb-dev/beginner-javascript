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

await testStep('logs voting eligibility', async () => {
	expect(output.toLowerCase()).toContain('vote')
})

await testStep('logs pass/fail status', async () => {
	expect(output).toMatch(/Pass|Fail/i)
})
