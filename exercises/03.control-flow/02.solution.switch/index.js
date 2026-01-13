const day = 'Monday'

switch (day) {
	case 'Monday':
		console.log('Start of work week')
		break
	case 'Wednesday':
		console.log('Midweek')
		break
	case 'Friday':
		console.log('Almost there!')
		break
	case 'Saturday':
	case 'Sunday':
		console.log('Weekend!')
		break
	default:
		console.log('Regular day')
}
