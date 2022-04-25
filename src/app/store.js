import {configureStore} from '@reduxjs/toolkit'

import postsReducer fron '../features/posts/postsSlice'

export default configureStore({
	reducer: {
		sides: sidesReducer
	}
})