import React from 'react';
import axios from 'axios';

const fetcher = async() =>{
  const result = await axios.get("http://localhost:8080/elevators")
                            .then(({data})=>data);
    return result;
}
export function App(){
  const [place, setPlace] = React.useState([]);
  React.useEffect(()=>{
 fetcher().then(response=>setPlace(response));
  }, [])
  return <p>{JSON.stringify(place)}</p>
}