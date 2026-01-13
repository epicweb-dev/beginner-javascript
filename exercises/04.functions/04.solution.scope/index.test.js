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

await testStep('accesses global variable', async () => {
	expect(output.toLowerCase()).toContain('global')
})

await testStep('accesses local variable', async () => {
	expect(output.toLowerCase()).toContain('local')
})
