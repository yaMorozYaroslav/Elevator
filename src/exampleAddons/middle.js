export const loggerMiddleware = storeAPI => next => action =>{
	const originalResult = next(action)
	return 'Hello!'
}