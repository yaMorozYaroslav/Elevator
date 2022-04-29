import React from "react";
import {connect} from 'react-redux'
import {getTodos, selectAllSides} from '../redux/selectors'
import Side from "./Side";
import {useSelector, useDispatch} from 'react-redux'
import {getElvs} from '../redux/actCreates'

const List = () => {
  const dispatch = useDispatch()
  const sides = useSelector(selectAllSides)

 React.useEffect(()=>{
  dispatch(getElvs())
 },[dispatch])

  return(<ul>
    {sides && sides.length
      ? sides.map((side, index) => {
          return <Side key={side.id} side={side} />;
        })
      : "No elevators, yay!"}
  </ul>)
}

export default connect(null, {getElvs})(List)
