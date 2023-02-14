import React from 'react'
import {Box, Text, Button} from './Upper.styled.js'
import {UpperState} from './UpperState'

export function Upper(){
	
const {state, handClick0, handClick1} = UpperState()
	
	return (
	<>
	<Box title='ColorBox' state={state}/>
	
	<Text state={state}>
	    {state.click0 === 1  ? 'Blue Box': null}
	    {state.click1 === 1  ? 'Grey Box': null}
	    {state.click0 === 0 && state.click1 === 0 ? 'Green Box': null}
    </Text>
		           
	<Area title='FirstButt' 
	      disabled={state.click1 === 1}
	      numb={state.click0}
	      onClick={handClick0}/>
	      
	<Area title='SecondButt'
	      disabled={state.click0 === 1}
	      numb={state.click1}  
	      onClick={handClick1}/>
	</>
	)
	}

function Area({numb, title, disabled, onClick}){

	return <Button 
	           title={title}
	           onClick={onClick}
	           disabled={disabled}
	           >{numb}  </Button>
	           
	}
