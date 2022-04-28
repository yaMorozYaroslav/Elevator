import { ADD_TODO, GET_ELVS} from "./consts";
import {createAsyncThunk} from '@reduxjs/toolkit'
import {fetchElvs} from '../api'

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});
export const getElvs = createAsyncThunk(GET_ELVS, async()=>{
  const response = await fetchElvs()
  return response.data
})


