import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './api/server'

import store from './store'
console.log('Initail state: ', store.getState())
const unsubscribe = store.subscribe(()=>
   console.log('State after dispatch: ', store.getState())
  )
store.dispatch({type: 'todos/todoAdded', payload: 'Learn about actions'})

unsubscribe()

store.dispatch({type: 'todos/todoAdded', payload: 'Try creating'})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
