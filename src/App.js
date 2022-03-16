import React from 'react';
import {Fetch} from './storage/Fetch'

import {getStoryIds} from './hnApi';

export const App=()=> {
	
	 const [storyIds, setStoryIds] = React.useState([]);
   
   React.useEffect(()=>{
   	getStoryIds().then(stories=>setStoryIds(stories));
   }, []);

	return <p>{JSON.stringify(storyIds)}</p>;
};