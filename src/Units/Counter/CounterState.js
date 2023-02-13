import React from 'react'

export function CounterState(){
	const [state, setState] = React.useState({count:0,word:null})
	
	const increment = () => {
		  setState({...state, count: state.count + 1})
		}
	const decrement = () => {
		  setState({...state,
			        count: state.count - 1,
			        word: 'decrement'})
		}
	return {state, increment, decrement}
	}
