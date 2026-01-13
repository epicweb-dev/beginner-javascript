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

await testStep('tests equality', async () => {
	expect(output).toContain('===')
})

await testStep('tests less than', async () => {
	expect(output).toContain('<')
})

await testStep('tests greater than or equal', async () => {
	expect(output).toContain('>=')
})

await testStep('tests inequality', async () => {
	expect(output).toContain('!==')
})
