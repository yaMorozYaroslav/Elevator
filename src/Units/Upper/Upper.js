import React from 'react'
import styled from 'styled-components'

export function Upper(){
	const [state, setState] = React.useState(null)
	
	const handleChange0 = () => {state===null?setState(0):setState(null)}
	const handleChange1 = () => {state===null?setState(1):setState(null)}
	
	const Box = styled.section`
	width:100px;
	height:100px;
	background: ${props => props.state !== null ? props.state === 1 ? 'green' : 'grey': 'blue'}
	`
	
	return(
	<>
	<Box state={state}/>
	<h1>{state === null ? state === 0 ? 'grey box' : 'blue box' : 'green box'}</h1>
	<Area disabled={state === 1} numb={state} onClick={handleChange0} onDoubleClick={null}/>
	<Area disabled={state === 0} numb={state} onClick={handleChange1}/>
	</>
	)
	}

function Area({numb, disabled, onClick}){
	return <button 
	           style={{zIndex:'2', position:'relative'}} 
	           onClick={onClick}
	           disabled={disabled}
	           >{numb!==null?numb:'n'}  </button>
	           
	}
