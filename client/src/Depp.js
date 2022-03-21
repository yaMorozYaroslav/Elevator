import React from 'react';
import axios from 'axios';

function Buston(){
	const [click, setClick] = React.useState(false);
    const handClick = () => setClick(!click);
    const refer = React.useRef(null);
	React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/1")
	     .then((res)=>console.log(res.data.elevator));
	
	     },[click]);
	return [click, handClick, refer];
}

export const Button =()=>{
const [tick, handTick, ref] = Buston(); 
 return <button onClick={handTick} ref={ref}>1</button>}