 import React from 'react';
 import './Intro.css';

 export function Instru(){
 	const [vik, setVik] = React.useState(true)
 	React.useEffect(()=>{
        
 		const timein = setTimeout(()=>{
 			setVik(false)
 		},6500)

 		return()=>clearTimeout(timein);
 	},[vik])
 	return<p className="instru">{vik
        ?'You can access all elevators  by double- and triple-click. Countdown starts from the first or nearest available elevator.'
        :null}</p>
 }