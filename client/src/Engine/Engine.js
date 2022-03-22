import React from 'react';
import styles from './Engine.js';
import {getElvs} from '../getElvs';

export function Engine(){
	const [place, setPlace] = React.useState([]);
	React.useEffect(()=>{
		getElvs().then(res=>setPlace(data[0].floor))
	},[place])
	return(<>
		<button className={place==0?styles.one:null}>One</button>
		<butoon className={place==1?""}
		<>)
}
