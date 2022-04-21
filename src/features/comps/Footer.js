import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {RemainingTodos,
        StatusFilter, 
        ColorFilters} from '../filters/FiltComps'

import {onColorChange, onStatusChange} from '../filters/filtersSlice'
import {
  completedTodosCleared,
  allTodosCompleted
} from '../todos/todosSlice'
export const Footer =()=>{
  const dispatch = useDispatch()

	const todosRemaining = useSelector(state=>{
		const uncompletedTodos = state.todos.filter(todo=>!todo.completed)
		return uncompletedTodos.length
	})
	const {status, colors} = useSelector((state)=>state.filters)

  const onMarkCompletedClicked =()=> dispatch(allTodosCompleted())
  const onClearCompletedClicked =()=> dispatch(completedTodosCleared())

  const colorChange =(color, changeType)=>
                        dispatch(onColorChange(color, changeType))
  const statusChange =(status)=>
                        dispatch(onStatusChange(status))

	return(
      <footer className="footer">
        <div className="actions">
          <h5>Actions</h5>
          <button 
             className="button"
             onClick={onMarkCompletedClicked}>Mark All Comleted</button>
          <button 
             className="button"
             onClick={onClearCompletedClicked}>Clear Completed</button>
         </div>

         <RemainingTodos count={todosRemaining}/>
         <StatusFilter value={status} onChange={onStatusChange} />
         <ColorFilters value={colors} onChange={onColorChange} />
         </footer>
		)
}