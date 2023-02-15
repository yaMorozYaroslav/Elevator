import React from 'react'

export function CounterState(){
	const [state, setState] = React.useState({count:'0',word:null})
	
	const lastChar = state.count.substr(state.count.length - 1)
	console.log(lastChar)
	const increment = () => {
		  setState({...state, count: lastChar.concat( + 1)})
		}
	const decrement = () => {
		  setState({...state,
			        count: state.count - 1,
			        word: 'decrement'})
		}
	return {state, increment, decrement}
	}
