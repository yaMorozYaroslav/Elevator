import React from 'react'

export function CounterState(){
	const [state, setState] = React.useState({count:'0',word:null,change:false})
	
	const lastChar = state.count.substring(state.count.length - 1)
	const lastTwo = state.count.substring(state.count.length - 2, state.count.length)
	
    const newIncCount = state.count.length > 10
                     ?state.count.concat(+lastTwo + +1)
                     :state.count.concat(+lastChar + +1)
    const newDecCount = state.count.length > 10
                        ?state.count.slice(0, state.count.length - 2)
                        :state.count.slice(0, state.count.length - 1)
	const increment = () => {
		  setState({...state, count: newIncCount, change: !state.change })
		}
	const decrement = () => {
		  setState({...state, count: newDecCount , word: 'decrement'})
		}
	return {state, increment, decrement}
	}
