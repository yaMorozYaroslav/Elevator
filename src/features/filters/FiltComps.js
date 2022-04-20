import React from 'react'
import {availableColors, capitalize} from './colors'
import {StatusFilters} from '../filters/filtersSlice'

export const RemainingTodos = ({count}) => {
	const suffix = count === 1 ? '' : 's'

	return(
      <div className="todo-count">
         <h5>Remainig Todos</h5>
         <strong>{count}</strong> item{suffix} left
      </div>
  )
}

export const StatusFilter = ({value: status, onChange}) => {
	const renderedFilters = Object.keys(StatusFilters).map((key)=>{
		const value = StatusFilters[key]
		const handleClick =()=> onChange(value)
		const className = value === status ? 'selected':''

		return (
       <li key={value}>
         <button className={className} onClick={handleClick}>
           {key}
         </button>
        </li>
	    )
	   })

	    return(
       <div className="filters statusFilters">
          <h5>Filter by Status</h5>
          <ul>{renderedFilters}</ul>
       </div>
	    )}

export const ColorFilters = ({value: colors, onChange})=>{
	const renderedColors = availableColors.map((color)=>{
		const checked = colors.includes(color)
		const handleChange =()=>{
			const changeType = checked ? 'removed' : 'added'
			onChange(color, changeType)
		}
		return(
         <label key={color}>
         <input
            type="checkbox"
            name={color}
            checked={checked}
            onChange={handleChange}
           />
         <span className="color-block"
         style={{
         	backgroundColor: color
         }}
         ></span>
         {capitalize(color)}
         </label>
		)
	})
	return(
      <div className="filters colorFilters">
         <h5>Filter by Color</h5>
         <form className="colorSelection">{renderedColors}</form>
      </div>
	)
}