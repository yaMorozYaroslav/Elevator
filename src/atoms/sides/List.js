import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {selectAllSides, 	toFirst, fetchSides} from './sidesSlice'
import {Side} from './Side'




export const List =()=>{
	const [place, getData] = React.useState([])
	const dispatch = useDispatch()
	const sides = useSelector(selectAllSides)
	const sideStatus = useSelector(state=>state.sides.status)
     
     const clicked = async()=>{
     	try{
     		await dispatch(toFirst())
     	}catch(err){
     		console.error('Failed', err)
     	}
     }
     
	React.useEffect(()=>{
     if(sideStatus === 'idle'){ 
     	dispatch(fetchSides())}
	}, [sideStatus, dispatch])
	

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
   

