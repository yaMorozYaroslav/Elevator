import React from 'react';
import axios from 'axios';
const baseUrl = 'https://hacker-news.firebaseio.com/v0/newstories.json';


export const App = ()=>{
	axios.get(baseUrl).then((response)=>{console.log(response.data)})
    return <p>Fetch</p>;
}

