import React from 'react';
import {Buttons} from './Buttons.js';
import {Elv1, Elv2, Elv3} from './components/Control/Control';
import {fetcher} from './Res.js';
export function App(){
  const [place, setPlace] = React.useState([]);
  React.useEffect(()=>{
 fetcher().then(response=>setPlace(response));
  }, [place])
  return (<>
         <Buttons/>
         <Elv1/>
         <Elv2/>
         <Elv3/>
          
            </>);
}