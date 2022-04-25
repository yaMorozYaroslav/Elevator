import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
}from 'react-router-dom'

import {useSelector, useDispatch} from 'react-redux'
import {Navbar} from './app/Navbar'
import {List} from './atoms/sides/List'
import {selectAllSides, fetchSides} from './atoms/sides/sidesSlice'
//import {Elevs} from

export function App(){
	const dispatch = useDispatch()
	const posts = useSelector(selectAllSides)
	React.useEffect(()=>{
      dispatch(fetchSides())
	}, [posts])
	return(
      <Router>
       <Routes>
         <Route path="/" element={<List/>}/>
       </Routes>
      </Router>
		)
}