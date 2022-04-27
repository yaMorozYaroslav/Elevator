import {configureStore} from '@reduxjs/toolkit'

import sidesReducer from './sidesSlice'

export default configureStore({
	reducer:{
		sides: sidesReducer
	}
})