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

await testStep('sum of 1-10 is 55', async () => {
	expect(output).toContain('55')
})

await testStep('finds first divisor of 100', async () => {
	expect(output.toLowerCase()).toContain('divisor')
})

await testStep('first divisor of 100 > 1 is 2', async () => {
	expect(output).toContain('2')
})
