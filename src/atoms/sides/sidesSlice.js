import {createSlice} from '@reduxjs/toolkit'

const initialState = [
{id: 'elv', floor: 'null', state: 'exists'}]

const sidesSlice = createSlice({
	name: 'sides',
	initialState,
	reducers:{}
})
export default sidesSlice.reducer