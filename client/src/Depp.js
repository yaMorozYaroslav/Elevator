import React from 'react';
import axios from 'axios';

export function Button(){
	const [click, setClick] = React.useState(false);
    const handClick = () => setClick(!click);
    
	React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/1")
	     .then((res)=>console.log(value));
	
	     },[click]);
	return <>
	<button ref={refer} onClick={handClick}>1</button>
    </>
}

