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

await testStep('greet function logs a greeting', async () => {
	expect(output).toContain('Hello')
})

await testStep('sayGoodbye function logs goodbye', async () => {
	expect(output).toContain('Goodbye')
})
