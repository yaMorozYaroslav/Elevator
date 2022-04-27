import React from "react";
import Todo from "./Todo";
import {connect} from 'react-redux'
import {getTodos, getTodosByVisibilityFilter} from '../redux/selectors'
import * as actionCreators from '../redux/actions'

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);
const mapState = state =>{
  const {visibilityFilter} = state
  const todos = getTodosByVisibilityFilter(state, visibilityFilter)
  return {todos}
}
export default connect(mapState)(TodoList)
