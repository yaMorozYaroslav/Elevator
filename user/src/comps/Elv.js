import React from 'react'

export const Elv = ({elv})=>{
	return(
     <div>
        <h1>{elv.id}</h1>
        <p>{elv.floor}</p>
        <p>{elv.state}</p>
     </div>
		)
}