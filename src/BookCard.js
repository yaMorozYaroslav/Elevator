import React from 'react';
const BookCard = (props)=>{
	return(
	<div className="card-container">
	     <a href={props.prev} >
		 <img src={props.image} alt=""/>
         </a>
		 <div className="desc">
		    <h2>{props.title}</h2>
		    <h3>{props.author}</h3>
		    <p>{props.published}</p>
		    <p>{props.deskr}</p>
	  </div>
	</div>
	)
}
export default BookCard;