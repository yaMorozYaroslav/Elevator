import React from 'react'

export function Entity(){
   const [click, setClick] = React.useState({click: 0, blick: 0})
   return <button title='Button' onClick={()=>setClick({...click, click: 1})}>
                                     {click?'click':'noClick'}</button>
	}
