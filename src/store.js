import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducer'


import {loggerMiddleware} from './exampleAddons/middle'


const myMiddle = applyMiddleware(loggerMiddleware)


const composedEnhancer = composeWithDevTools( myMiddle,
                        applyMiddleware(
	                                   thunkMiddleware))
const store = createStore(rootReducer, composedEnhancer)

export default store