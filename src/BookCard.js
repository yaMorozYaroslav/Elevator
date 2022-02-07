import React from 'react';
const BookCard = (props)=>{
	return(
	<div className="card-container">
	     <a href={props.prev} >
		 <img src={props.image} alt=""/>
         </a>
		 <div className="desc">
		    <h2>{props.title}</h2>
		    <h3>Author: {props.author}</h3>
		    <p>Published Data:{props.published}</p>
		    <p>Description: {props.deskr}</p>
	  </div>
	</div>
	)
}
export default BookCard;