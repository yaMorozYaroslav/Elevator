import React from "react"
import {connect} from 'react-redux'
import {useDispatch} from 'react-redux'
import {floorOne} from '../redux/actCreates'

const Add =(props)=> {
  const dispatch = useDispatch()
 const onZero =()=> {
    dispatch(floorOne())
  }
 
    return (
      <div>
        <button onClick={onZero}>
          Move Elevator
        </button>
      </div>
    );
  }

export default connect(null, {floorOne})(Add)
