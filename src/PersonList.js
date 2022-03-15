import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component{
  state = {
    stories: [],
  };
  componentDidMount(){
    axios.get(`https://hacker-news.firebaseio.com/v0/newstories.json`)
      .then(res => {console.log(res); 
      this.setState({stories: res.data});
    });
  }

render(){
  return ( <ul>{this.state.stories.map(story => (
               <li key={story.id}>{story.title}</li>
                ))}
         </ul>
         );
}
}
