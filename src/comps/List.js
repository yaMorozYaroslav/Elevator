import React from "react";
import {connect} from 'react-redux'
import {getTodos} from '../redux/selectors'
import Side from "./Side";

const List = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Side key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);

export default connect(state=>({todos: getTodos(state) }))(List)
