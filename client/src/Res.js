import axios from 'axios';

export const fetcher = async() =>{
  const result = await axios.get("http://localhost:8080/elevators")
                            .then(({data})=>data);
    return result;
}
//Ex-app
/*import React from 'react';
import {Depp} from './Depp';
import {fetcher} from './Res.js';
export function App(){
  const [place, setPlace] = React.useState([]);
  React.useEffect(()=>{
 fetcher().then(response=>setPlace(response));
  }, [place])
  return (<><p>{JSON.stringify(place)}</p><Depp/></>);
}*/
