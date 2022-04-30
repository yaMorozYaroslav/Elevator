import React from "react";
import {connect} from 'react-redux'
import {getTodos, selectAllSides} from '../redux/selectors'
import Side from "./Side";
import {useSelector, useDispatch} from 'react-redux'
import {getElvs, floorOne} from '../redux/actCreates'
import {fetchElvs} from '../api'
const List = () => {
  const dispatch = useDispatch()
  const sides = useSelector(selectAllSides)
  const [place, setData] = React.useState([])
 React.useEffect(()=>{
  fetchElvs().then(data=>setData(data))
 }, [place])
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
const mapStateToProps

export default connect(null, {floorOne})(List)
