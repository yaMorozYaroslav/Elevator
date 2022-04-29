import React from "react"
import {connect} from 'react-redux'

const Todo = ({ side }) => (
 
  <li>
      <span>
      {side.id}&{side.floor}
    </span>
  </li>
);

export default Todo
