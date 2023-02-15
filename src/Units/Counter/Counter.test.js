import {CounterState} from './CounterState'
import {act, renderHook} from '@testing-library/react'

describe('counter state actions', () => {
	it('increments count by 1', () => {
		const {result} = renderHook(CounterState)
		act(() => { result.current.increment() })
		expect(result.current.state.count).toBe(1)
		})
	it('decrements count by 1', () => {
		const {result} = renderHook(CounterState)
		act(() => { result.current.decrement() })
		expect(result.current.state.count).toBe(0)
		})
	it('adds a word when decremented', () => {
		const {result} = renderHook(CounterState)
		act(() => { result.current.decrement() })
		expect(result.current.state).toEqual(expect.objectContaining({word:'decrement'}))
		})
	})
