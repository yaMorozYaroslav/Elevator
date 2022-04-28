
  import React from 'react'
  import {connect} from 'react-redux'
  import {getSides} from '../redux/selectors'
  import Side from './Side'

const List = ({sides})=>(
  <ul>
     {sides&&sides.length
     	 ?sides.map((side,index)=>{
     	return <Side key={`side-${side.id}`} side={side} />
     })
     	 :
     	 "Create something"
 }
  </ul>
	)
	export default connect(state=>({sides: getSides(state)}))(List)