import {Upper} from './Upper'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'


test('First button is diabled, when second one is active', () => {
	const {getByTestId} = render(<Upper/>)
	//expect(screen.getByTitle('firstButt')).toHaveAttribute('disabled')
	expect(screen.getByTitle('firstButt')).toBe()
	
	})
