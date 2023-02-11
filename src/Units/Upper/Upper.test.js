import React from 'react'
import {Upper} from './Upper'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import {render, screen, fireEvent, act} from '@testing-library/react'

test('The State Test', () => {
  const setMockState = jest.fn()
  const useMockState = useState => [useState,setMockState]
  jest.spyOn(React, 'useState').mockImplementation(useMockState)
  
  const {getByTitle} = render(<Upper/>)
  const button = screen.getByTitle('FirstButton')
  fireEvent.click(button)
})
test('Displays two active buttons by default', () => {
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
})
