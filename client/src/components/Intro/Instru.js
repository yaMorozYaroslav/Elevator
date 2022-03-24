 import React from 'react';
 import './Intro.css';

 export function Instru(){
 	const [vik, setVik] = React.useState(true)
 	React.useEffect(()=>{
        
 		const timein = setTimeout(()=>{
 			setVik(false)
 		},7000)

 		return()=>clearTimeout(timein);
 	},[vik])
 	return<p className="instru">{vik
        ?'You can access all elevators  by double- and triple-click. Countdown starts from nearest available or the first elevator.'
        :null}</p>
 }