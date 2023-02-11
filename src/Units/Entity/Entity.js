import React from 'react'

export function Entity(){
   const [clicks, setClick] = React.useState({click0: 0, click1: 0})
   
   const handleChange0 = () => {clicks.click0===0
		                     ?setClick(clicks => ({...clicks, click0: 1}))
		                     :setClick(clicks => ({...clicks, click0: 0}))
							 }
   const handleChange1 = () => {clicks.click1===0
		                     ?setClick(clicks => ({...clicks, click1: 1}))
		                     :setClick(clicks => ({...clicks, click1: 0}))
							 }
   
   return <button title='Button'
                  onClick={()=>setClick({...clicks, click0: 1})}>
                  
           {clicks?'click':'noClick'}</button>
	}
