 import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
 import axios from 'axios'

const initialState = {
sides: [],
status: 'idle',
error: null}

export const toFirst = createAsyncThunk('sides/moveSides', async()=>{
   const response = await axios.put('floor/5')
   return response.data
})

export const fetchSides = createAsyncThunk('sides/fetchSides', async()=>{
	const response = await axios.get('elevators')
	return response.data
}) 

const sidesSlice = createSlice({
	name: 'sides',
	initialState,
	reducers:{},
extraReducers(builder){
    builder
        .addCase(fetchSides.pending, (state, action)=>{
          state.status = 'loading'
        })
        .addCase(fetchSides.fulfilled, (state, action)=>{
          state.status = 'succeeded'
          state.sides = []
          state.sides = state.sides.concat(action.payload)
        })
        .addCase(fetchSides.rejected, (state, action)=>{
          state.status = 'failed'
          state.error = action.error.message
        })
      }
  })
export default sidesSlice.reducer

export  const selectAllSides = state => state.sides.sides
export const selectFirst = state => state.sides.sides[0]
export const selectById =(state, id)=>
   selectAllSides(state)?{...selectAllSides(state).byIds[id], id}:{}
export const getAllSides =(state)=>
    selectAllSides(state).map((id)=>selectById(state))