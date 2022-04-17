import {GET_ALL, MOVE_0} from '../cooked'

const elvRed =(elvs=[], action)=>{
	switch(action.type){
		case GET_ALL:
		return action.payload
		case MOVE_0:
		return action.payload
	  default:
	    return elvs
	}
}
export default elvRed