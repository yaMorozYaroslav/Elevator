import React from 'react'
import {CounterState} from './CounterState'
import styled from 'styled-components'
export function Counter(){
	const {state, increment, decrement} = CounterState()
	const {change, setChange} = React.useState()
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	const Paragraph = styled.p`
	  color: ${change ? {randomColor} : {randomColor}};
	`
	return(
	<>
	  <Paragraph>{state.count}</Paragraph>
	  <button onClick={increment}>Increment</button>
	  <button onClick={decrement}>Decrement</button>
	</>
	)
	}
