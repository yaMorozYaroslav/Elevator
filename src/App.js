import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
}from 'react-router-dom'

import {Navbar} from './app/Navbar'
//import {Elevs} from

export function App(){
	return(
      <Router>
       <Routes>
         <Route path="/" element={<Navbar/>}/>
       </Routes>
      </Router>
		)
}