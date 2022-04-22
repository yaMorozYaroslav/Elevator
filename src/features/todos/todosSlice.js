import {client} from '../../api/client'
import {createSelector} from 'reselect'
import {StatusFilters} from '../filters/filtersSlice'

const initialState = [
 status: 'idle',
 entities: []
]
function nextTodoId(todos){
 const maxId = todos.reduce((maxId, todo)=> Math.max(todo.id, maxId), -1)
 return maxId + 1
}
export default function todosReducer(state=initialState, action){
	switch(action.type){
		case 'todos/todoAdded':{
			return{...state,
			 entities: [...state.entities, action.payload]
			}
		}
		case 'todos/todoToggled':{
			return{
				...state,
				entities: state.entities.map(todo => {
					if(todo.id !== action.payload){
						return todo
					}
					return{
						...todo,
						completed: !todo.completed
					}
				})
			}
			
		}
		case 'todos/todosLoaded': {
			return action.payload
		}
		default:
		  return state
	}
}
export const todosLoaded = todos => {
	return {
		type: 'todos/todosLoaded',
		payload: todos
	}
}
export const todoAdded = todo => ({type:'todos/todoAdded', payload: todo})

export const fetchTodos =()=> async dispatch=> {
	const response = await client.get('/fakeApi/todos')
	dispatch(todosLoaded(response.todos))
      }

export function saveNewTodo(text){
	return async function saveNewTodoThunk(dispatch, getState){
		const initialTodo = {text}
		const response = await client
		         .post('/fakeApi/todos', {todo: initialTodo})
		dispatch(todoAdded(response.todo))

		}
	}
	export const selectTodoIds = createSelector(
      state => state.todos,
      todos => todos.map(todo =>todo.id)
		)
export const selectFilteredTodos = createSelector(
   selectTodos,
   state => state.filters,
   (todos, filters) => {
   	const {status, color} = filters
   	const showAllCompletions = status === StatusFilters.All
   	if(showAllCompletions && colors.length === 0){
   		return todos
   	}
   	const completedStatus = status === StatusFilters.Completed
    retunr todos.filtere(todo=>{
    	const statusMatches =
    	   colors.length === 0||colors.includes(todo.color)
    	return statusMatches && colorMatches
    })
   }
	)
   export const selectFilteredTodoIds = createSelector(
   	selectFilteredTodos,
   	filteredTodos => filteredTodos.map(todo => todo.id)
   	)
   export const selectTodos = state => state.todos.entities

   export const selectTodoById = (state, todoId) => {
   	   return selectTodos(state).find(todo=>todo.id===todoId)
   }