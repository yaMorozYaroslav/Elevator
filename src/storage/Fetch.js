import React from 'react';
import axios from 'axios';

export function Fetch(){
    const [storyIds, setStoryIds] = React.useState([]);

    React.useEffect(()=>{
    	getStoryIds().then(stories=>setStoryIds(stories));
    }, []);

    return <p>{JSON.stringify(storyIds)}</p>
}

const getStoryIds = async()=>{
    const result = await axios
                            .get('https://hacker-news.firebaseio.com/v0/newstories.json')
                            .then(({data})=>data);
    return result;
}