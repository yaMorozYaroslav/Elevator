import React from 'react';
import './Intro.css';
 
 export function Intro(){
 	const [vip, setVip] = React.useState(true)
 	React.useEffect(()=>{
        
 		const timeout = setTimeout(()=>{
 			setVip(false)
 		},2000)

 		return()=>clearTimeout(timeout);
 	},[vip])
 	return<p className="well">{vip?'Good day.':null}</p>

 }

 