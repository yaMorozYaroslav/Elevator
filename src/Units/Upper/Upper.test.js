import React from 'react'
import {Upper} from './Upper'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import {render, screen, fireEvent, act} from '@testing-library/react'

test('the state test', () => {
	const setState = jest.fn()
	jest.spyOn(React, 'useState')
	.mockImplementation(initState => [initState, setState])
	
	render(<Upper />)
	const button = screen.getByTitle('FirstButt')
	act(() => fireEvent.click(button))
	expect(setState).toHaveBeenCalledWith(expect.objectContaining({'click0': 1}))
	})
/*test('Displays two active buttons by default', () => {
	render(<Upper/>)
	expect(screen.getByTitle('FirstButt'))
	             .toHaveProperty('disabled', false)
	expect(screen.getByTitle('SecondButt'))
	             .toHaveProperty('disabled', false)
	expect(screen.getByTitle('ColorBox')).toHaveStyle('background:green')
})
test('Disables the first button when the second is active', () => {
	render(<Upper/>)
	fireEvent.click(screen.getByTitle('FirstButt'))
	expect(screen.getByTitle('SecondButt'))
	             .toHaveProperty('disabled', true)
})
test('Disables the second button when the first is active', () => {
    render(<Upper/>)
	fireEvent.click(screen.getByTitle('SecondButt'))
	expect(screen.getByTitle('FirstButt'))
	             .toHaveProperty('disabled', true)
}) */
