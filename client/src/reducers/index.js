let defaultState={floor: ''}

const mainReducer=(state=defaultState,action)=>{
	if(action.type==="SEE_FLOOR"){
		return{
			...state,
			floor:action.floor
		}
	}else{
		return{...state}
	}
}
export default mainReducer;