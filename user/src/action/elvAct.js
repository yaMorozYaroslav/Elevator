import {GET_ALL, MOVE_0} from '../cooked'
import * as api from '../api'

export const getElvs =()=> async(dispatch)=>{
	try{
		const{data} = await api.fetchElv()
		dispatch({type: GET_ALL, payload: data})
	}catch(error){
		console.log(error.message)
	}
}
export const moveZero =()=> async(dispatch)=>{
	try{
		const {data} = await api.moveZero()
		dispatch({type: MOVE_0, payload: data})
	}catch(error){
		console.log(error)
	}
}