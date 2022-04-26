import React from 'react'
import {connect} from 'react-redux'
import {fetchSides} from './sidesSlice'

export const Side = ({side},props) => {
return(
		<article >
		  <h3>{props.id}</h3>
		  <h4>{side.floor}</h4>
		  <h5>{side.state}</h5>
		  </article>
		)
} 


