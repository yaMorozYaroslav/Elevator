import 'jest-styled-components'
import '@testing-library/jest-dom'
import {Counter} from './Counter'
import {CounterState} from './CounterState'
import {act,render, renderHook,
	              screen, fireEvent} from '@testing-library/react'

describe('counter state actions', () => {
	it('increments count by 1', () => {
		const {result} = renderHook(CounterState)
		act(() => { result.current.increment() })
		expect(result.current.state.count).toBe('01')
		})
	it('decrements count by 1', () => {
		const {result} = renderHook(CounterState)
		act(() => { result.current.decrement() })
		expect(result.current.state.count).toBe('')
		})
	it('adds a word when decremented', () => {
		const {result} = renderHook(CounterState)
		act(() => { result.current.decrement() })
		expect(result.current.state).toEqual(
		              expect.objectContaining({word:'decrement'}))
		})
	})
describe('elements on the screen', () => {
	it('changes color on state change', () => {
		render(<Counter/>)
		expect(screen.getByTitle('Paragraph')).toHaveStyle('color:random')
		
	  })
	})
