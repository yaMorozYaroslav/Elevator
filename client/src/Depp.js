import React from 'react';
import axios from 'axios';

export function Depp(){
	React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/8")
	     .then((res)=>console.log(res));
	axios.put("http://localhost:8080/floor/5")
	     .then((res)=>console.log(res));
	axios.put("http://localhost:8080/floor/3")
	     .then((res)=>console.log(res));
	     },[])
	return <p></p>
}