import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {availableColors, capitalize} from '../filters/colors'

const selectTodoById = (state, todoId) => {
	return state.todos.find(todo => todo.id === todoId)
}

export const TodoItem =({id})=>{
	const dispatch = useDispatch()
	const todo = useSelector(state => selectTodoById(state, id))
	const {text, completed, color} = todo
	const handleCompletedChanged =()=>{
		dispatch({type: 'todos/todoToggled', payload: todo.id})
	}
	return(<>
      <h6>{todo.text}</h6>
      <p>{todo.completed}</p>
		</>)
}