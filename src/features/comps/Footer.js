import React from 'react'
import {useSelector} from 'react-redux'

import {availableColors, capitalize} from '../filters/colors'
import {StatusFilters,
        onColoreChange,
        onStatusChange} from '../filters/filtersSlice'

export const Footer =()=>{
	const todosRemaining = useSelector(state=>{
		const uncompletedTodos = state.todos.filter(todo=>!todo.completed)
		return uncomletedTodos.length
	})
	const {status, colors} = useSelector(state=>state.filters)

	return(
      <footer className="footer">
        <div className="actions">
          <h5>Actions</h5>
          <button className="button">Mark All Comleted</button>
          <button className="button">Clear Completed</button>
         </div>

         <RemainingTodos count={todosRemaining}/>
         <StatusFilter value={status} onChange={onStatusChange} />
         <ColorFilters value={colors} onChange={onColorChange} />
		)
}