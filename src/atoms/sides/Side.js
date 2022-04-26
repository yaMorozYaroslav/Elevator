import React from 'react'
import {connect} from 'react-redux'
import {fetchSides} from './sidesSlice'

const Side = ({side}, props) => {
return(
		<article >
		  <h3>{props.id}</h3>
		  <h4>{side.floor}</h4>
		  <h5>{side.state}</h5>
		  </article>
		)
} 
const mapStateToProps =state=>{
	return{
		id: state.id,
		floor: state.floor
	}
}
const mapDispatchToProps = dispatch =>{
	return{
		fetchSides: ()=>dispatch(fetchSides())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Side)
