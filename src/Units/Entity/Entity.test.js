import React from 'react'
import {Entity} from './Entity'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import {render, screen, fireEvent, act} from '@testing-library/react'

test('shoud test what goes into the state', () => {
	const setState = jest.fn()
	jest.spyOn(React, 'useState')
	.mockImplementation(initState => [initState, setState])
	
	render(<Entity />)
	const button = screen.getByTitle('FirstButt')
	act(() => fireEvent.click(button))
	expect(setState).toHaveBeenCalledWith(expect.objectContaining({'click0': 2}))
	
	})
/*test('Displays two active buttons by default', () => {
	render(<Entity/>)
	expect(screen.getByTitle('FirstButt'))
	             .toHaveProperty('disabled', false)
	expect(screen.getByTitle('SecondButt'))
	             .toHaveProperty('disabled', false)
	expect(screen.getByTitle('ColorBox')).toHaveStyle('background:green')
})
test('Disables the first button when the second is active', () => {
	render(<Entity/>)
	act(()=>fireEvent.click(screen.getByTitle('FirstButt')))
	expect(screen.getByTitle('SecondButt'))
	             .toHaveProperty('disabled', true)
})
test('Disables the second button when the first is active', () => {
    render(<Entity/>)
	act(()=>fireEvent.click(screen.getByTitle('SecondButt')))
	expect(screen.getByTitle('FirstButt'))
	             .toHaveProperty('disabled', true)
})
*/
