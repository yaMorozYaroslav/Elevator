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
 },[sides, dispatch])

  return(<ul>
    {sides && sides.length
      ? sides.map((side, index) => {
          return <Side key={side.id} side={side} />;
        })
      : "No elevators, yay!"}
  </ul>)
}
const mapState = state => ({
  sides: state.sides
})

export default connect(mapState, {getElvs})(List)
