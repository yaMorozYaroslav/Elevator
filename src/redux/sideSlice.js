import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  sides: [],
  status: 'idle',
  error: null
}
const sideSlice = createSlice({
  name: 'sides',
  initialState,
  reducers:{},

})
export default sideSlice.reducer

export const selectAllSides = state => state.sides.sides

export const selectSideById =(state, sideId)=>
             state.sides.sides.find(side => side.id === sideId)
