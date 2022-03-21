import React from 'react';
import {Contr} from './components/Contr/Contr'
import {B0,B1,B2,B3,B4,B5,B6,B7,B8,B9} from './Buttons.js';
import {fetcher} from './Res.js';
export function App(){
  const [place, setPlace] = React.useState([]);
  React.useEffect(()=>{
 fetcher().then(response=>setPlace(response));
  }, [place])
  return (<><p>{JSON.stringify(place)}</p>
         
          <B0/> <B1/> <B2/> <B3/> <B4/> <B5/> <B6/> <B7/> <B8/> <B9/> 
            </>);
}