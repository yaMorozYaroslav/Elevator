import React from 'react'
import {Header} from './features/comps/Header'
import {Footer} from './features/comps/Footer'
import {TodoList} from './features/todos/TodoList'
function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <Header/>
          <TodoList/>
          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <section>
        <h2>Welcome to the Redux Fundamentals example app!</h2>
      </section>
    </div>
  )
}

export default App
