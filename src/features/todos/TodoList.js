import React from 'react'
import {useSelector} from 'react-redux'
import {TodoItem} from './TodoItem'

const selectTodos = state => state.todos

export const TodoList =()=>{
	const todos = useSelector(selectTodos)

	const renderedListItems = todos.map(todo=>{
		return <TodoItem key={todo.id} todo={todo}/>
	})
  return <ul>{renderedListItems}</ul>
}