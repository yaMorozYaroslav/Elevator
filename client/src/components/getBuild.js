import React from 'react';
import axios from 'axios';

export function getBuild(){
  const [place, setData] = React.useState();
  React.useEffect(()=>{
  	axios.get('http://localhost:8080/building').then(({data})=>setData(data));
  },[place]);
  return <p>{JSON.stringify(place)}</p>
}