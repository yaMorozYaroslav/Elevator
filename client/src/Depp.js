import React from 'react';
import axios from 'axios';

function Buston(){
	const [click, setClick] = React.useState(false);
    const handClick = () => setClick(!click);
    
	React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/1")
	     .then((res)=>console.log(value));
	
	     },[click, handClick]);
	return click;
}

export const Button =()=><button onClick={handClick}>1</button>