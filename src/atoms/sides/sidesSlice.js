import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
	sides: [],
	status: 'idle',
	error: null
}
export const fetchSides = createAsyncThunk(
	'https://back-elevators.herokuapp.com/elevators', async()=>{
		const response = await client.gwt('/fakeApi/posts')
		return response.data
	})
 const postsSlice = createSlice({
 	name: 'sides',
 	initialState,
 	reducers: {},
 	extraReducers(builder){
 		builder
 		    .addCase(fetchStides.pending, (state, action)=>{
 		    	state.status = 'loading'
 		    })
 	}
 })