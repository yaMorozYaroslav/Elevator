import React from 'react';
import axios from 'axios';

const fetching = async () => {
   const toForget = await axios.get('https://hacker-news.firebaseio.com/v0/item/8863.json').then(({data})=>data);
   return toForget;
}

export function Fetch(){
    const [place, setData] = React.useState([]);

    React.useEffect(()=>{
    fetching().then(loads=>setData(loads));
  }, []);
    return <p>{JSON.stringify(place)}</p>
}