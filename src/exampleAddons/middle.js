export const loggerMiddleware = storeAPI => next => action =>{
	if(action.type === 'todos/todoAdded'){
		setTimeout(()=>{
			console.log('Added a new todo', action.payload)
		}, 4000)
	}
	return next(action)
}