import React from 'react';

export function File(){

	function Container(){
	return <div id="container"> 
	           <p id="demo">Its P</p>
	           <h1 id="emo">Emo</h1>   </div>
	       }
	function Manipulation(){
		var pElement = document.getElementById("container");
	    pElement.firstElementChildren.style.color = "green";
	    const green = pElement.firstElementChildren;
	    return green;
	}
	return Manipulation();
}