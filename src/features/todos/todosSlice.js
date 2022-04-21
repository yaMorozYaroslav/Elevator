import {client} from '../../api/client'
const initialState = [
 {id: 0, text: 'Learn React', completed: true},
 {id: 1, text: 'Learn Redux', completed: false, color: 'purple'},
 {id: 2, text: 'Build something fun!', completed: false, color: 'blue'}
]
function nextTodoId(todos){
 const maxId = todos.reduce((maxId, todo)=> Math.max(todo.id, maxId), -1)
 return maxId + 1
}
export default function todosReducer(state=initialState, action){
	switch(action.type){
		case 'todos/todoAdded':{
			return[...state, action.payload]
		}
		case 'todos/todoToggled':{
			return state.map(todo=>{
				if(todo.id !== action.payload){
					return todo
				}
				return{
					...todo,
					completed: !todo.completed
				}
			})
		}
		case 'todos/todosLoaded': {
			return action.payload
		}
		default:
		  return state
	}
}
export async function fetchTodos(dispatch, getState){
	const response = await client.get('/fakeApi/todos')

	const stateBefore = getState()
	console.log('Todos before dispatch', stateBefore.todos.length)

	dispatch({type: 'todos/todosLoaded', payload: response.todos})

	const stateAfter = getState()
	console.log('Todos after dispatch', stateAfter.todos.length)
}
export function saveNewTodo(text){
	return async function saveNewTodoThunk(dispatch, getState){
		const initialTodo = {text}
		const response = await client
		         .post('/fakeApi/todos', {todo: initialTodo})
		dispatch({type: 'todos/todoAdded', payload: response})

		}
	}
