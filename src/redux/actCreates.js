import {ADD_SIDE} from './consts'

let nextSideId = 0

export const addSide = content => ({
	type: ADD_SIDE,
	payload: {
		id: ++nextSideId,
		content
	}
})