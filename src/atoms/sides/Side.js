import React from 'react'
import {connect} from 'react-redux'
import {fetchSides} from './sidesSlice'

export const Side = ({side}) => {
return(
		<article >
		  <h3>{side.id}</h3>
		  <h4>{side.floor}</h4>
		  <h5>{side.state}</h5>
		  </article>
		)
}
const mapStateToProps =state=>{
	return{
		
	}
}
const mapDispatchToProps = dispatch =>{
	return{
		fetchSides: ()=>dispatch(fetchSides())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Side)