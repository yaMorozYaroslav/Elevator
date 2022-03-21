import React from 'react';
import {Control} from './Control.js';
import {Elv1} from './components/Elv1/Elv1';
import {Elv2} from './components/Elv2/Elv2';
import {fetcher} from './Res.js';
export function App(){
  const [place, setPlace] = React.useState([]);
  React.useEffect(()=>{
 fetcher().then(response=>setPlace(response));
  }, [place])
  return (<><p>{JSON.stringify(place)}</p>
         <Control/>
         <Elv1/>
         <Elv2/>
          
            </>);
}