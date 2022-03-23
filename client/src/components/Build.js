import React from 'react';
import axios from 'axios';

const getDate =async()=>{
  const result = await axios.get('http://localhost:8080/building').then(({data})=>data);
  return result;
}

export function Build(){
  const [place, setData] = React.useState();
  React.useEffect(()=>{
  	getDate().then(res=>setData(res))
  },[place]);
  return <p>{JSON.stringify(place)}</p>
}