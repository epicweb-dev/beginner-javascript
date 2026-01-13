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

await testStep('logs notAssigned as undefined', async () => {
	expect(output).toContain('undefined')
})

await testStep('logs intentionallyEmpty as null', async () => {
	expect(output).toContain('null')
})

await testStep('compares null and undefined', async () => {
	expect(output).toContain('true')
	expect(output).toContain('false')
})
