import React from 'react'

export function UpperState(){
	
const initialState = {click0: 0, click1: 0}

   const [state, setState] = React.useState(initialState)
   
   const handClick0 = () => {state.click0===0
		                     ?setState({...state, click0: 1})
		                     :setState({...state, click0: 0})
							 }
   const handClick1 = () => {state.click1===0
		                     ?setState({...state, click1: 1})
		                     :setState({...state, click1: 0})
							 }
	console.log(state)

return {state, handClick0, handClick1}
}
