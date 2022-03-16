import React from 'react';
import axios from 'axios';

const fetched = async() =>{
    const result = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json')
                              .then(({data})=>data);
      return result;
}

export function Fetch(){
    const [place, setFetched] = React.useState([]);
    
    React.useEffect(()=>{
        fetched().then(data=>setFetched(data));
    }, []);

    return <p>{JSON.stringify(place)}</p>
}