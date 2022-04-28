import React from "react"
import {connect} from 'react-redux'

const Todo = ({ todo }) => (
 
  <li>
      <span>
      {todo.content}
    </span>
  </li>
);

export default Todo
