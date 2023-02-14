import {CounterState} from './CounterState'
import {act, renderHook} from '@testing-library/react'

describe('counter state actions', () => {
	it('increments count by 1', () => {
		const {result} = renderHook(CounterState)
		act(() => { result.current.increment() })
		expect(result.current.state.count).toBe(1)
		})
	it('adds the word on decrement', () => {
		const {result} = renderHook(CounterState)
		act(() => { result.current.decrement() })
		expect(result.current.state).toHaveBeenCalledWith(expect.objectContaining({word:'decrement'}))
		})
	})
