import {ADD_SIDE} from './consts'

const initialState = {
	sides: [],
	byIds: {}
}

export default function(state = initialState, action){
	switch(action.type){
		case ADD_SIDE: {
			const {id, content} = action.payload
			return{
				...state,
				sides: [...state.sides, id],
				byids: {
					...state.byIds,
					[id]:{content, completed: false}
				}
			}
		}
		default: return state
	}
}