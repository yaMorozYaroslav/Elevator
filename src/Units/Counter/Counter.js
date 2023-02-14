import React from 'react'
import {CounterState} from './CounterState'

export function Counter(){
	const {state, increment, decrement} = CounterState()
	
	return(
	<>
	  <p>{state.count}</p>
	  <button onClick={increment}>Increment</button>
	  <button onClick={decrement}>Decrement</button>
	</>
	)
	}
