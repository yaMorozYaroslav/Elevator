import React from 'react';
import axios from 'axios';

function Buston(){
	const [click, setClick] = React.useState(false);
    const handClick = () => setClick(!click);
    return [click, handClick];
}

 export const B0=()=>{
const [tick, handTick] = Buston();
React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/0")
	     .then((res)=>console.log(JSON.stringify(res.data.elevator)));
	
	     },[tick]); 
 return <button onClick={handTick}>G</button>}

 export const B1=()=>{
const [tick, handTick] = Buston();
React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/1")
	     .then((res)=>console.log(JSON.stringify(res.data.elevator)));
	
	     },[tick]); 
 return <button onClick={handTick}>1</button>}

  export const B2=()=>{
const [tick, handTick] = Buston();
React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/2")
	     .then((res)=>console.log(JSON.stringify(res.data.elevator)));
	
	     },[tick]); 
 return <button onClick={handTick}>2</button>}

  export const B3=()=>{
const [tick, handTick] = Buston();
React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/3")
	     .then((res)=>console.log(JSON.stringify(res.data.elevator)));
	
	     },[tick]); 
 return <button onClick={handTick}>3</button>}

  export const B4=()=>{
const [tick, handTick] = Buston();
React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/4")
	     .then((res)=>console.log(JSON.stringify(res.data.elevator)));
	
	     },[tick]); 
 return <button onClick={handTick}>4</button>}

  export const B5=()=>{
const [tick, handTick] = Buston();
React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/5")
	     .then((res)=>console.log(JSON.stringify(res.data.elevator)));
	
	     },[tick]); 
 return <button onClick={handTick}>5</button>}

  export const B6 =()=>{
const [tick, handTick] = Buston();
React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/6")
	     .then((res)=>console.log(JSON.stringify(res.data.elevator)));
	
	     },[tick]); 
 return <button onClick={handTick}>6</button>};

  export const B7=()=>{
const [tick, handTick] = Buston();
React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/7")
	     .then((res)=>console.log(JSON.stringify(res.data.elevator)));
	
	     },[tick]); 
 return <button onClick={handTick}>7</button>}

  export const B8=()=>{
const [tick, handTick] = Buston();
React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/8")
	     .then((res)=>console.log(JSON.stringify(res.data.elevator)));
	
	     },[tick]); 
 return <button onClick={handTick}>8</button>}

   export const B9=()=>{
const [tick, handTick] = Buston();
React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/9")
	     .then((res)=>console.log(JSON.stringify(res.data.elevator)));
	
	     },[tick]); 
 return <button onClick={handTick}>9</button>}