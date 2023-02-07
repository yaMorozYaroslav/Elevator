import React from 'react'
import styled from 'styled-components'

export function Upper(){
	const [state, setState] = React.useState({click0: null, click1: null})
	const newValue = {click0: 0}
	const handleChange0 = () => {state.click0===null
		                         ?setState(state => ({...state, ...newValue}))
		                         :setState(state => ({...state, click0: null}))
							 }
	const handleChange1 = () => {state===null?setState({click1:0}):setState({click1:null})}
	console.log(state.click0)
	//background: ${props => props.state !== null ? props.state === 1 ? 'green' : 'grey': 'blue'}
	const Box = styled.section`
	width:100px;
	height:100px;
	
	`
	
	return(
	<>
	<Box state={state.click0}/>
	<h1>{state.clickState0 === null ? state.clickState0 === 0 ? 'grey box' : 'blue box' : 'green box'}</h1>
	<Area disabled={state.click1 === 1} numb={state.click0} onClick={handleChange0} onDoubleClick={null}/>
	<Area disabled={state.click0 === 1} numb={state.click1} onClick={handleChange1}/>
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
