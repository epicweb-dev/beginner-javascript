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

await testStep('logs destructured username', async () => {
	expect(output).toContain('Username')
})

await testStep('logs destructured email', async () => {
	expect(output).toContain('Email')
})

await testStep('logs destructured array values', async () => {
	expect(output).toMatch(/First score|score/i)
})
