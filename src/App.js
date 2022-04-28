import React from "react";
import Add from "./comps/Add";
import List from "./comps/List";

import "./style.css";

export default function App() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <Add />
      <List />
    </div>
  );
}