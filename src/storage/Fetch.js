import React from 'react';
import axios from 'axios';

const fetching = async () => {
   const toForget = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json')
                                  .then(({data})=>data);
   return toForget;
}
const directFetch = async dataId=>{
    let sumNum = 30711654;
    const result = await axios.get(
    'https://hacker-news.firebaseio.com/v0/item/' + sumNum +'.json')
    .then(({data})=>data);
    return result;
                                   
}

export function Fetch(){
    const [place, setData] = React.useState([]);

    React.useEffect(()=>{
    //fetching().then(loads=>setData(loads));
    directFetch().then(data=>setData(data));
  }, []);
    return <p>{JSON.stringify(place)}</p>
}