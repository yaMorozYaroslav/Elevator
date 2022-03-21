import React from 'react';
import {Contr} from './components/Contr/Contr'
import {fetcher} from './Res.js';
export function App(){
  const [place, setPlace] = React.useState([]);
  const [click, setClick] = React.useState(false);
  const handClick = () => setClick(!click);
  React.useEffect(()=>{
 fetcher().then(response=>setPlace(response));
  }, [place])
  return (<><p>{JSON.stringify(place)}</p>
            <button onClick={handClick}>Click</button>
            <Contr/></>);
}