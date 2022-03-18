import React from 'react';


export function File(){
	const refer = React.useRef(null);
  function slideUp(){
  	refer.current.style.maxHeight = "0px";
  }
  function slideDown(){
  	refer.current.style.maxHeight = "100px";
  }
  return <>
         <ul ref={refer} style={{"max-height":"100px", 
                                 "overflow-y":"hidden",
                                 "transition": "all 1s"}}>
            <li>Mercury</li>
            <li>Venus</li>
            <li>Earth</li>
            <li>Mars</li>
         </ul>
         <button onClick={slideUp}>SlideUp</button>
         <button onClick={slideDown}>SlideDown</button>
         </>
}