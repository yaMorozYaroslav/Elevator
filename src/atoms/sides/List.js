import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {selectAllSides, 	toFirst} from './sidesSlice'
import {Side} from './Side'

export const List =()=>{
	const dispatch = useDispatch()
	const sides = useSelector(selectAllSides)
	const sideStatus = useSelector(state=>state.sides.status)
	const content = sides.map(side=>(
     	<Side key={side.id} side={side}/> ))
 return(
      <section>
      {content}
      <button onClick={dispatch(toFirst())}>but</button>
      </section>
 	)

}
