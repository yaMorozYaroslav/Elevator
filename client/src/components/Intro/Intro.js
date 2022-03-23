import React from 'react';
 
 export function Intro(){
 	const [vip, setVip] = React.useState(false)
 	React.useEffect(()=>{
        
 		const timeout = setTimeout(()=>{
 			setVip(false)
 		},3000)

 		return()=>clearTimeout(timeout);
 	},[vip])
 	return<p>{vip?'Hello there':null}</p>

 }

 