import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from './reducer'

import {loggerMiddleware} from './exampleAddons/middle'
import {alwaysWelcome} from './exampleAddons/secondMid'

const myMiddle = applyMiddleware(loggerMiddleware)
const myWelcome = applyMiddleware(alwaysWelcome)
const composedEnhancer = compose( myMiddle, myWelcome)

const store = createStore(rootReducer, composedEnhancer)

export default store