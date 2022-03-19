import React from 'react';
import axios from 'axios';

export function Contr(){
const [move, setMove] = React.useState([]);
const[active, setActive] = React.useState(false);
consr handClick = () => setActive(true);
React.useEffect(()=>{
	axios.put("http://localhost:8080/floor/1")
	                           .then(res=>setMove(res));
}, [])
	  return <button onClick={handClick}>1</button>
}
