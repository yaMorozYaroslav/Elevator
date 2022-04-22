import React from 'react'
import {useSelector} from 'react-redux'
import {TodoItem} from './TodoItem'
import {selectTodoIds} from './todosSlice'


export const TodoList =()=>{
	const todoIds = useSelector(selectTodoIds)

	const renderedListItems = todoIds.map(todoId=>{
		return <TodoItem key={todoId} id={todoId}/>
	})
  return <ul>{renderedListItems}</ul>
}