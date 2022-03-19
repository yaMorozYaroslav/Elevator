import React from 'react';
import axios from 'axios';
const baseUrl = 'http://localhost:8080/';
const 


export function App(){
  const [place, setElev] = React.useState([]);
  React.useEffect(()=>{
    axios.put('http://localhost:8080/floor/3')
         .then(response=>setElev(response.data.place))
  })
  return <p>{JSON.stringify(place)}</p>
}