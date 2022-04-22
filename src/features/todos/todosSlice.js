const initialState = {
	status: 'idle',
	entities: {}
}
const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers:{
		todoAdded(state,action){
			const todo = action.payload
			state.entities[todo.id] = todo
		},
		todoToddled(state, action){
			const todoId = action.payload
			const todo = state.entities[todoId]
			todo.completed = !todo.completed
		},
		todoColorSelected:{
			reducer(state, action){
				const {color, todoId} = action.payload
				state.entities[todoId].color = color
			},
			prepare(todoId, color){
				return{
					payload: {todoId, color}
				}
			}
		},
		todoDeleted(state, action){
			delete state.entities[action.payload]
		}
	}
})
export const {todoAdded, todoToggled, 
	     todoColorSelected, todoDeleted} = todosSlice.actions
export default todosSlice.reducer