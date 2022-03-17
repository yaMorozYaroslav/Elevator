import axios from 'axios';

const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
const storyUrl = `${baseUrl}item/`;
const newStoriesUrl = `${baseUrl}/newstories.json`;

export const getSrori = async storyId => {
	const result = await axios.get(`${storyUrl+storyId}.json`)
	                    .then(({data})=>data);
	      return result;
}
export const getSroris = async()=> {
	const result = await axios.get(newStoriesUrl)
	                             .then(({data})=>data);
	  return result;
}