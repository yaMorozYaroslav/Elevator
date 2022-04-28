import React from 'react'
import Add from './comps/Add'
import List from './comps/List'
import './style.css'

export function App(){
	return(
      <div>
        <h1>List</h1>
        <List/>
        <Add/>
        </div>
		)
}