import React from 'react';
import './Intro.css';
 
 export function Intro(){
 	const [vip, setVip] = React.useState(true)
 	React.useEffect(()=>{
        
 		const timeout = setTimeout(()=>{
 			setVip(false)
 		},5000)

 		return()=>clearTimeout(timeout);
 	},[vip])
 	return<p className="well">{vip?'Hello there':null}</p>

 }

 