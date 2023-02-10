import {Upper} from './Upper'
import '@testing-library/jest-dom'
import {render, screen, fireEvent} from '@testing-library/react'


test('Displays two active buttons by default')
test('Disables the first button when the second is active', () => {
	render(<Upper/>)
	fireEvent.click(screen.getByTitle('firstButt'))
	expect(screen.getByTitle('secondButt'))
	             .toHaveProperty('disabled', true)
})
