 import React from 'react';

 export function Instru(){
 	const [vik, setVik] = React.useState(true)
 	React.useEffect(()=>{
        
 		const timein = setTimeout(()=>{
 			setVik(false)
 		},5500)

 		return()=>clearTimeout(timein);
 	},[vik])
 	return<p>{vik?'You can access all elevators  by double- and triple-click.':null}</p>

 }