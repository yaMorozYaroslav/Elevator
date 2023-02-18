import React from 'react'
import {CounterState} from './CounterState'
import random from 'randomcolor'
import styled from 'styled-components'

const Paragraph = styled.p`
	  background: ${props => props.change ? props.random : props.random};
	  font-size: 30px;
	`

export function Counter(){
	
	
	const {state, increment, decrement} = CounterState()
	const [paint, setPaint] = React.useState('')
	//const onChange = () => {state.change?setPaint(color):setPaint(color)}
	console.log(state.change)
	
	const Count = ({title, change, random, count}) => 
	  <Paragraph  title={title} change={change} random={random}>{count}</Paragraph>
	
	React.useEffect(()=>{
		 const color = random()
		 setPaint(color)
		},[state.change])
	return(
	<>
	  <Count title='Count' count={state.count} change={state.change} random={paint} ></Count>
	  <button onClick={increment}>Increment</button>
	  <button onClick={decrement}>Decrement</button>
	</>
	)
	}
