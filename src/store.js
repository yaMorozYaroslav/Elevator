import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducer'

import {loggerMiddleware} from './exampleAddons/middle'
import {alwaysWelcome} from './exampleAddons/secondMid'

const myMiddle = applyMiddleware(loggerMiddleware)
const myWelcome = applyMiddleware(alwaysWelcome)

const composedEnhancer = composeWithDevTools( myMiddle, myWelcome)

const store = createStore(rootReducer, composedEnhancer)

export default store