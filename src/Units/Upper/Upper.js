import React from 'react'
import {Box, Text} from './Upper.styled.js'
import styled from 'styled-components'

export function Upper(){
	const [state, setState] = React.useState({click0: 0, click1: 0})
	const handleChange0 = () => {state.click0===0
		                     ?setState(state => ({...state, click0: 1}))
		                     :setState(state => ({...state, click0: 0}))
							 }
	const handleChange1 = () => {state.click1===0
		                     ?setState(state => ({...state, click1: 1}))
		                     :setState(state => ({...state, click1: 0}))
							 }
	console.log(state)
	
	
	return(
	<>
	<Box state={state}/>
	
	<Text state={state}>{state.click0 === 1  ? 'blue box': null}
	    {state.click1 === 1  ? 'grey box': null}
	    {state.click0 === 0 && state.click1 === 0 ? 'green box': null}
    </Text>
		           
	<Area disabled={state.click1 === 1}
	      numb={state.click0}
	      onClick={handleChange0}
	      onDoubleClick={null}/>
	      
	<Area disabled={state.click0 === 1}
	      numb={state.click1}  
	      onClick={handleChange1}/>
	</>
	)
	}

function Area({numb, disabled, onClick}){
	return <button 
	           style={{zIndex:'2', position:'relative'}} 
	           onClick={onClick}
	           disabled={disabled}
	           >{numb}  </button>
	           
	}
