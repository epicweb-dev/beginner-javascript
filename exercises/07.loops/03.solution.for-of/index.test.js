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

await testStep('logs colors section', async () => {
	expect(output).toContain('Colors')
})

await testStep('calculates and logs sum', async () => {
	expect(output).toContain('Sum')
})

await testStep('sum of [10,20,30,40,50] is 150', async () => {
	expect(output).toContain('150')
})

await testStep('finds largest number', async () => {
	expect(output).toContain('Largest')
})

await testStep('largest number is 50', async () => {
	expect(output).toContain('50')
})
