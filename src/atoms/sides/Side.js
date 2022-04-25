import React from 'react'

export const Side = ({side}) => {
return(
		<article  key={side.id}>
		  <h3>{side.id}</h3>
		  <h4>{side.floor}</h4>
		  <h5>{side.state}</h5>
		  </article>
		)
}