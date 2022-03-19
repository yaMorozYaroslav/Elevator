import React from 'react';

import {fetcher} from './Res.js';
export function App(){
  const [place, setPlace] = React.useState([]);
  React.useEffect(()=>{
 fetcher().then(response=>setPlace(response));
  }, [])
  return <p>{JSON.stringify(place)}</p>
}

export function Depp(){
  const [mess, setMess] = React.useState([]);
  React.useEffect(()=>{
  axios.put("http://localhost:8080/floor/1")
       .then(response=>setMess(response.data.mes))
  }) 
}
