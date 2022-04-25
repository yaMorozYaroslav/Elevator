import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
}from 'react-router-dom'

import {useDispatch} from 'react-redux'
import {Navbar} from './app/Navbar'
import {fetchSides} from './atoms/sides/sidesSlice'
//import {Elevs} from

export function App(){
	React.useEffect(()=>{

	})
	return(
      <Router>
       <Routes>
         <Route path="/" element={<Navbar/>}/>
       </Routes>
      </Router>
		)
}