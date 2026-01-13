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

await testStep('logs sum', async () => {
	expect(output).toContain('Sum')
})

await testStep('logs difference', async () => {
	expect(output).toContain('Difference')
})

await testStep('logs product', async () => {
	expect(output).toContain('Product')
})

await testStep('logs quotient', async () => {
	expect(output).toContain('Quotient')
})

await testStep('logs remainder', async () => {
	expect(output).toContain('Remainder')
})
