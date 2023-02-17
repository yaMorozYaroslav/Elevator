import React from 'react'
import {CounterState} from './CounterState'
import random from 'randomcolor'
import styled from 'styled-components'

export function Counter(){
	const color = random()
	console.log(color)
	const {state, increment, decrement} = CounterState()
	const [paint, setPaint] = React.useState('')
	//const onChange = () => {state.change?setPaint(color):setPaint(color)}
	
	//function Parag(
	const Paragraph = styled.p`
	  color: ${color};
	`
	return(
	<>
	  <Paragraph>{state.count}</Paragraph>
	  <button onClick={increment}>Increment</button>
	  <button onClick={decrement}>Decrement</button>
	</>
	)
	}
