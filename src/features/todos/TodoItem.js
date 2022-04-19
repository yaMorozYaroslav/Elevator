import React from 'react'

export const TodoItem =({todo})=>{
	return(<>
      <h6>{todo.text}</h6>
      <p>{todo.completed}</p>
		</>)
}