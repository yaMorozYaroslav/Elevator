import React from 'react'
import {useSelector, shallowEqual} from 'react-redux'
import {TodoItem} from './TodoItem'

const selectTodoIds = state => state.todos.map(todo=>todo.id)

export const TodoList =()=>{
	const todoIds = useSelector(selectTodoIds, shallowEqual)

	const renderedListItems = todoIds.map(todoId=>{
		return <TodoItem key={todoId} id={todoId}/>
	})
  return <ul>{renderedListItems}</ul>
}