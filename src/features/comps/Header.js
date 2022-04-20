import React from 'react'
import {useDispatch} from 'react-redux'

export const Header =()=>{
	const [text,setText] = React.useState('')
	const dispatch = useDispatch()

	const handleChange =e=> setText(e.target.value)

	const handleKeyDown =e=>{
		const trimmedText = e.target.value.trim()
		if(e.key === 'Enter' && trimmedText){
			dispatch({type: 'todos/todoAdded', payload: trimmedText})
			setText('')
		}
	}
	return(
  <input
      type="text"
      placeholder="Put some text."
      autoFocus={true}
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
     />
  )
}