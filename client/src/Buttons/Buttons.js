import React from 'react';
import axios from 'axios';
import './buttons.css';

function Buston(){
	const [click, setClick] = React.useState(false);
    const handClick = () => setClick(!click);
    return [click, handClick];
}

const B0=()=>{
const [tick, handTick] = Buston();
React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/0")
	     .then((res)=>res);

	     },[tick]); 
 return <button onClick={handTick}>1</button>}

 const B1=()=>{
const [tick, handTick] = Buston();
React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/1")
	     .then((res)=>res);
	
	     },[tick]); 
 return <button onClick={handTick}>2</button>}

  const B2=()=>{
const [tick, handTick] = Buston();
React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/2")
	     .then((res)=>res);
	
	     },[tick]); 
 return <button onClick={handTick}>3</button>}

  const B3=()=>{
const [tick, handTick] = Buston();
React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/3")
	     .then((res)=>res);
	
	     },[tick]); 
 return <button onClick={handTick}>4</button>}

  const B4=()=>{
const [tick, handTick] = Buston();
React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/4")
	     .then((res)=>res);
	
	     },[tick]); 
 return <button onClick={handTick}>5</button>}

  const B5=()=>{
const [tick, handTick] = Buston();
React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/5")
	     .then((res)=>res);
	
	     },[tick]); 
 return <button onClick={handTick}>6</button>}

  const B6 =()=>{
const [tick, handTick] = Buston();
React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/6")
	     .then((res)=>res);
	
	     },[tick]); 
 return <button onClick={handTick}>7</button>};

  const B7=()=>{
const [tick, handTick] = Buston();
React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/7")
	     .then((res)=>res);
	
	     },[tick]); 
 return <button onClick={handTick}>8</button>}

  export const B8=()=>{
const [tick, handTick] = Buston();
React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/8")
	     .then((res)=>res);
	
	     },[tick]); 
 return <button onClick={handTick}>9</button>}

   const B9=()=>{
const [tick, handTick] = Buston();
React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/9")
	     .then((res)=>res);
	
	     },[tick]); 
 return <button onClick={handTick}>10</button>}

export const Buttons =()=>{return(
 	 <div className="cont">
 	             <div className="first"><B0/> <B1/> <B2/></div>
 	             <div className="secon"><B3/> <B4/> <B5/></div>
 	      <div className="third"><B6/> <B7/> <B8/> <B9/></div>
 	  </div>)}