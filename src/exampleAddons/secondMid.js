export const alwaysWelcome = storeAPI => next => action => {
	const originalResult = next(action)
	return 'Welcome!'
}