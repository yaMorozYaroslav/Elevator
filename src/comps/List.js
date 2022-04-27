
  import React from 'react'
import Side from './Side'

const List = ({sides})=>(
  <ul>
     {sides&&sides.length
     	 ?sides.map((side,index)=>{
     	return <Side key={`side-${side.id}`} side={side} />
     })
     	 :
     	 "Nothing yet"
 }
  </ul>
	)
	export default List