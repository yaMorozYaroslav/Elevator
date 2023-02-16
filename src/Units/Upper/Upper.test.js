import React from 'react'
import {Upper} from './Upper'
import {UpperState} from './UpperState'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import {render, screen, fireEvent, 
	               act, renderHook} from '@testing-library/react'


describe('Counter State Test', () => {
	afterEach(() => console.log("test"))
	it('increments state.click0 by 1', () => {
		const {result} = renderHook(UpperState)
		act(() => { result.current.handClick0() })
		expect(result.current.state.click0).toBe(1)
		})
	it('increments state.click1 by 1', () => {
		const {result} = renderHook(UpperState)
		act(() => { result.current.handClick1()})
		expect(result.current.state).toEqual(expect.objectContaining({click1:1}))
		})  
	})

describe('Counter UI Test', () => {
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
})
