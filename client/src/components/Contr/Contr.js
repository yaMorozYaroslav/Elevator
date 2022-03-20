import React from 'react';
import axios from 'axios';
import './Contr.css';
//import {numbers} from './numbers';

export function Contr(){
const [move, setMove] = React.useState([]);
const [active, setActive] = React.useState(0);
const zero = () => setActive(0);
const one = () =>setActive(1);
const two = () =>setActive(2);
const three = () =>setActive(3);
const four = () =>setActive(4);
const five = () =>setActive(5);
const six = () =>setActive(6);
const seven = () =>setActive(7);
const eight = () =>setActive(8);
const nine = () =>setActive(9);
React.useEffect(()=>{
	const floor = 7;
	axios.put("http://localhost:8080/floor/"+active)
	                           .then(res=>setMove(res));
}, [active])
	  return (<dev>
	  <button onClick={zero}>G</button>
	  <button onClick={one}>1</button>
	  <button onClick={two}>2</button>
	  <button onClick={three}>3</button>
	  <button onClick={four}>4</button>
	  <button onClick={five}>5</button>
	  <button onClick={six}>6</button>
	  <button onClick={seven}>7</button>
	  <button onClick={eight}>8</button>
	  <button onClick={nine}>9</button>	 
 </dev>);

}
