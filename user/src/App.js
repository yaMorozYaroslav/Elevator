import React from 'react'
import {useDispatch} from 'react-redux'
import {getElvs} from './action/elvAct'
import {Elvs} from './comps/Elvs'

export const App =()=> {
    const dispatch = useDispatch()

   React.useEffect(()=>{
    dispatch(getElvs())
   }, [dispatch])


return(
   <div className="app">
      <Elvs />
    </div>
    )
}