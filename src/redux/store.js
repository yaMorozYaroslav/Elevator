import {configureStore} from '@reduxjs/toolkit'

import sideReducer from './sideSlice'

export default configureStore({
	reducer:{
		sides: sideReducer
	}
})