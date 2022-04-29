import {createSlice} from '@reduxjs/toolkit'
import {getElvs} from './actCreates'

const initialState = {
  sides: [],
  status: 'idle',
  error: null
}
const sideSlice = createSlice({
  name: 'sides',
  initialState,
  reducers:{},
 extraReducers(builder){
  builder
     .addCase(getElvs.pending, (state, action)=>{
      state.status = 'loading'
     })
     .addCase(getElvs.fulfilled, (state, action)=>{
      state.status = 'succeeded'
      state.sides = []
      state.sides = state.sides.concat(action.payload)
     })
     .addCase(getElvs.rejected, (state, action)=>{
      state.status = 'failed'
      state.error = action.error.message
     })
 }
})
export default sideSlice.reducer

