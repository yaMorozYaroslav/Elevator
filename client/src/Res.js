import React from 'react';
import axios from 'axios';

function useNum(){
  const [memo, setDat] = React.useState([]);
  React.useEffect(()=>{
    axios.get('http://localhost:8080/elevators')
         .then(({data})=>setDat(data))
  }, [memo])
   const nop = JSON.stringify(memo[0].floor);
   

  return nop;
}
export function Res(){
  const nop = useNum();
   switch(nop){
      case '0':
        console.log('0');
        break;
      default: console.log(`Sorry, we are out of ${nop}`);
    }
    return<p></p>
}