import React from 'react'
import {getElvs, moveZeru} from './action/elvAct'
import {Elvs} from './comps/Elvs'
import {useDispatch} from 'react-redux'

export const App =()=> {
    const dispatch = useDispatch()

   React.useEffect(()=>{
    dispatch(getElvs())
   }, [dispatch])
   const submit =(e)=>{
    dispatch(moveZeru())
   }

return(<>
   <div className="app">
      <Elvs />
   <button onClick={submit}>submit</button>
    </div>

    </>)}