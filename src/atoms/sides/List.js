import React from 'react'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import {selectAllSides, 	toFirst, fetchSides, getState} from './sidesSlice'
import {Sider} from './Sider'
import axios from 'axios'

export const axioser = async()=>{
	const result = await axios.get('elevators').then(({data})=>data)
	return result
}

const Side = ({side}) => {
return(
		<article  key={side.id}>
		  <h3>{side.id}</h3>
		  <h4>{side.floor}</h4>
		  <h5>{side.state}</h5>
		  </article>
		)
}

export const List =()=>{
	const [place, getData] = React.useState([])
	const dispatch = useDispatch()
	const sides = useSelector(selectAllSides, shallowEqual)
	const sideStatus = useSelector(state=>state.sides.status)
     
     const clicked = async()=>{
     	try{
     		await dispatch(toFirst())
     	}catch(err){
     		console.error('Failed', err)
     	}
     }
     React.useEffect(()=>{
        axioser().then(data=>getData(data))
     	
     }, [place])
	React.useEffect(()=>{
     if(sideStatus === 'idle'){ 
     	dispatch(fetchSides())}
	}, [place])
	
	const content = sides.map(side=>(<>
     	<Side key={side.id} side={side}/> 
     	</>))
 return(
      <section>
      {content}

      <button onClick={clicked}>but</button>
      </section>
 	)

}
