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

await testStep('outputs "Hello, JavaScript!"', async () => {
	expect(logs.some((log) => log.includes('Hello, JavaScript!'))).toBe(true)
})
