import React from 'react'
import {useSelector} from 'react-redux'
import {Elv} from './Elv'

export const Elvs =()=>{
	const elvs = useSelector((state)=>state.elvs)
	return(<section>
          {elvs.map((elv)=>(
          	<article key={elv.id}>
                <Elv elv={elv}/>
            </article>
          	))}
		</section>
    ) 
   }