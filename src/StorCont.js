import React from 'react';
import {getStoryIds, getStory} from './hnApi.js';

export const StoriesContainer = () => {
	const [storyIds, setStoryIds] = React.useState([]);

	React.useEffect(()=>{
		getStoryIds().then(data=>setStoryIds(data));
		getStory(30702503).then(some=>console.log(some));
	}, []);

	return <p>{JSON.stringify(storyIds)}</p>;
};