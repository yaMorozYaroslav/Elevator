import React from 'react';
import axios from 'axios';

const baseUrl = 'https://hacker-news.firebaseio.com/v0/newstories.json';

export const getStoryIds = async()=>{
  const result = await
        axios
        .get(baseUrl)
        .then(({data})=>data);

        return result;
}