import React from 'react';
import axios from 'axios';

const axioser = async () =>{
     const result = await axios.get("http://localhost:8080/elevators").then(({data})=>data);
   
     return result;
 }


export const Elv1 =()=>{
	const [place, setData] = React.useState([]);
React.useEffect(()=>{
	axioser().then(({data})=>setData(data));
},[place])
return <p>Elv1 on{JSON.stringify(place)}</p>
}