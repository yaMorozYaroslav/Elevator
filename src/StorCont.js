import React from 'react';
import {getSrori, getSroris} from './hnApi.js';

export const StoriesContainer = () => {
	const [storyIds, setStoryIds] = React.useState([]);

	React.useEffect(()=>{
		getSroris().then(data=>setStoryIds(data));
	}, []);

	return <p>{JSON.stringify(storyIds)}</p>;
};