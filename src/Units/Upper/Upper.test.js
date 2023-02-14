import React from 'react'
import {Upper} from './Upper'
import {UpperState} from './UpperState'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import {render, screen, fireEvent, 
	               act, renderHook} from '@testing-library/react'


describe('counter state actions', () => {
	afterEach(() => console.log("test"))
	it('increments count by 1', () => {
		const {result} = renderHook(UpperState)
		act(() => { result.current.increment() })
		expect(result.current.state.click0).toBe(1)
		})
	it('adds the word on decrement', () => {
		const {result} = renderHook(CounterState)
		act(() => { result.current.decrement() })
		expect(result.current.state).toBe(expect.objectContaining({word:'decrement'}))
		})
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
