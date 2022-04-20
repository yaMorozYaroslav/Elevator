import React from 'react'
import {useSelector} from 'react-redux'

import {availableColors, capitalize} from '../filters/colors'
import {StatusFilters} from '../filters/filterSlice'

export const Footer =()=>{
	const todosRemaining = useSelector(state=>{
		const uncompletedTodox = state.todos.filter(todo=>!todo.completed)
		return uncompletedTodos.length
	})
	const {status, colors} = useSelector(state => state.filters)

	return(
     <footer>
       <div>
         <h5>Actions</h5>
         <button>Mark All Completed</button>
         <button>Clear Completed</button>
       </div>

       <RemainingTodos count={todosRemaining} />
       <StatusFilter value={status} onChange={onStatusChange} />
       <ColorFilters value={colors} onChange={onColorChange} />
      </footer>
		)
}