import React from 'react'
import {useSelector} from 'react-redux'
import {selectFirst} from './sidesSlice'

export function Sider(){
	const side = useSelector(selectFirst)
	return(
	<p>{side.floor}</p>
)}