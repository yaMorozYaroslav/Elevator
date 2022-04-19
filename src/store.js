import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from './reducer'
import {sayHiOnDispatch, includeMeaningOfLife}
                      from './exampleAddons/enhancers'
import {print1, print2, print3} from './exampleAddons/middleware'
import {loggerMiddleware} from './exampleAddons/middle'

const middlewareEnhancer = applyMiddleware(print1, print2, print3)
const myMiddle = applyMiddleware(loggerMiddleware)
const composedEnhancer = compose(
	          sayHiOnDispatch, includeMeaningOfLife, middlewareEnhancer, myMiddle)

const store = createStore(rootReducer, composedEnhancer)

export default store