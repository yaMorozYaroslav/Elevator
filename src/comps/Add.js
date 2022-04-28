import React from "react"
import {connect} from 'react-redux'
import {useDispatch} from 'react-redux'
import {addTodo} from '../redux/actCreates'

const Add =(props)=> {
  const dispatch = useDispatch()
  const [input, setInput] = React.useState([])

 const onInput =e=> setInput(e.target.value)
 const onSave =()=> {
  if(input){
    dispatch(addTodo(input))
    setInput('')
  }
 }
    return (
      <div>
        <input
          onChange={onInput}
          value={input}
        />
        <button className="add-todo" onClick={onSave}>
          Add Todo
        </button>
      </div>
    );
  }

export default connect(null, {addTodo})(Add)
