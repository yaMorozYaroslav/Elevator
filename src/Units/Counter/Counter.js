import React from 'react'
import {CounterState} from './CounterState'

export function Counter(){
	const {count, increment, decrement} = CounterState()
	
	return(
	<>
	  <p>{count}</p>
	  <button onClick={increment}>Increment</button>
	  <button onClick={decrement}>Decrement</button>
	</>
	)
	}
