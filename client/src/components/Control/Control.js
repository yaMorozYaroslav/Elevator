import React from 'react';
import axios from 'axios';

const axioser = async () =>{
     const result = await axios.get("http://localhost:8080/elevators").then(({data})=>data);
     return result;
 }


export const Elv1 =()=>{
	const [place, setData] = React.useState([]);
React.useEffect(()=>{
	axioser().then(data=>setData(data[0]));

},[place])


return <p>Num {JSON.stringify(place).slice(21,22)}</p>

}

export const Elv2 =()=>{
	const [place, setData] = React.useState([]);
React.useEffect(()=>{
axioser().then(data=>setData(data[1]));},[place])
return <p>{JSON.stringify(place).slice(21,22)}</p>
}

export const Elv3 =()=>{
	const [place, setData] = React.useState([]);
React.useEffect(()=>{
axioser().then(data=>setData(data[2]));},[place])
return <p>{JSON.stringify(place).slice(21,22)}</p>
}