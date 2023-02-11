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
	const button = screen.getByTitle('Button')
	act(() => fireEvent.click(button))
	expect(setState).toHaveBeenCalledWith(expect.objectContaining({'blick':1}))
	
	})
