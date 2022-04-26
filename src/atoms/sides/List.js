import React from 'react'
import {connect} from 'react-redux'
import {useSelector, useDispatch} from 'react-redux'
import {selectAllSides, 	toFirst, fetchSides} from './sidesSlice'
import {Side}from './Side'


export const List =(todos)=>{
	const dispatch = useDispatch()
	const sides = useSelector(selectAllSides)
     
     const clicked = async()=>{
     	try{
     		await dispatch(toFirst())
     	}catch(err){
     		console.error('Failed', err)
     	}
     }
     
	

	const content = sides.map(side=>(
     	<Side key={side.id} side={side}/> 
     	))
 return(
      <section>
      {content}
      <button onClick={clicked}>but</button>
      </section>
 	)
   }
   const mapProps =state=> {
   	return{
   		sider: state.sides
   	}
   }
export default connect(mapProps)(List)
   

