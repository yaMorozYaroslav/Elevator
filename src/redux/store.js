import { configureStore} from "@reduxjs/toolkit"

import todosReducer from "./sideSlice"

export default configureStore({
	reducer: {
		todos: todosReducer
	}
})
