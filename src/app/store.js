import {configureStore} from '@reduxjs/toolkit'

import sidesReducer from '../atoms/sides/sidesSlice'

export default configureStore({
	reducer: {
		sides: sidesReducer
	}
})