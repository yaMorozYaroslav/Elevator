import React from 'react'
import {connect} from 'react-redux'
import {useSelector} from 'react-redux'
import {fetchSides, selectFirst} from './sidesSlice'

export function Sider(){
	const side = useSelector(selectFirst)
	return(
	<p>{side.floor}</p>
 )
}
const mapStateToProps =state=>{
	return{
		floor: state.floor
	}
}
const mapDispatchToProps = dispatch =>{
	return{
		fetchSides: ()=>dispatch(fetchSides())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Sider)