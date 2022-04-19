import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './api/server'

import store from './store'

store.dispatch({type: 'todos/todoAdded', payload: 'Learn about actions'})
console.log('State after dispatch: ', store.getState())
const dispatchResult = store.dispatch({type: 'some/action'})
console.log(dispatchResult)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
