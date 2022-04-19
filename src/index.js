import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './api/server'

import store from './store'

store.dispatch({type: 'todos/todoAdded', payload: 'Learn about actions'})
console.log('Dispatch complete')
console.log('State after dispatch: ', store.getState())
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
