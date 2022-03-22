import React from 'react';
import axios from 'axios';
import styles from './control.module.css';

const axioser = async () =>{
     const result = await axios.get("http://localhost:8080/elevators").then(({data})=>data);
     return result;
 }


 const Elv1 =()=>{
	const [place, setData] = React.useState([]);
React.useEffect(()=>{
	axioser().then(data=>setData(data[0]));
     
},[place])


return <>
       <p>Current floor {place.floor} 
        {place.state == "up"
             ?", and we're moving up to "+place.targetFloor:null}  
        {place.state == "down"
             ?", and we're miving down to "+place.targetFloor:null}
             </p>
         <div>{place.floor == "0"?<button>Groun</button>:null}</div>
        </>

}
 const Elv2 =()=>{
	const [place, setData] = React.useState([]);
React.useEffect(()=>{
	axioser().then(data=>setData(data[1]));

},[place])


return <>
     <p></p>
     <p>Current floor {place.floor} 
        {place.state == "up"
             ?", and we're moving up to "+place.targetFloor:null}  
        {place.state == "down"
             ?", and we're miving down to "+place.targetFloor:null}
             </p>
     </>

}
 const Elv3 =()=>{
	const [place, setData] = React.useState([]);
React.useEffect(()=>{
	axioser().then(data=>setData(data[2]));

},[place])


return <>
       <p>Current floor {place.floor} 
        {place.state == "up"
             ?", and we're moving up to "+place.targetFloor:null}  
        {place.state == "down"
             ?", and we're miving down to "+place.targetFloor:null}
             </p>
        </>

}
export const Control=()=>{return(<><Elv1/><Elv2/><Elv3/></>)}