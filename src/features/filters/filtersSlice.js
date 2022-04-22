import {createSlice} from '@reduxjs/toolkit'

export const StatusFilters = {
	All: 'all',
	Active: 'active',
	Completed: 'completed'
}

const initialState = {
	status: StatusFilters.All,
	colors: []
}
const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		onColorChange(state, action){
		state.status = action.payload
	},
	    onStatusChange: {
		 reducer(state, action){
			let{color, changeType} = action.payload
			const {colors} = state
			switch(changeType){
				case 'added':{
					if(!colors.includes(color)){
						colors.push(color)
					}
					break
				}
				case 'removed':{
					state.colors = colors.filter(
						(existingColor) => existingColor !== color
				   )
				   break		
				}
				default: 
				    return
			}
		},
		prepare(color, changeType){
			return{
				payload: {color, changeType}
	    }
	  }
	}
  }
})
export const colorFilterChanged = (color, changeType) => {
	return{
		type: 'filters/colorFilterChanged',
		payload: {color, changeType}
	}
}
export const { onStatusChange} = filtersSlice.actions
export default filtersSlice.reducer