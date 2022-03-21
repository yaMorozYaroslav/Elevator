import React from 'react';
import axios from 'axios';

export const Elv2 =()=>{
	const [place, setData] = React.useState([]);
React.useEffect(()=>{
	axios.get("http://localhost:8080/elevators").then(({data})=>setData(data[2]));
},[place])
return <p>{JSON.stringify(place).slice(13,22)}</p>
}