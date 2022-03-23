import React from 'react';
 
 export function Intro(){
 	const [vip, setVip] = React.useState(true)
 	React.useEffect(()=>{
        
 		const timeout = setTimeout(()=>{
 			setVip(false)
 		},4000)

 		return()=>clearTimeout(timeout);
 	},[vip])
 	return<p>{vip?'Hello there':null}</p>

 }

 