import React from 'react';
import {axioser} from '../Control/Control';
import './Elv2.css';

export const Elv2 =()=>{
	const [place, setData] = React.useState([]);
     const [show, setShow] = React.useState(false);
React.useEffect(()=>{
	axioser().then(data=>setData(data[1]));
     
},[place])
React.useEffect(()=>{
     const timeout = setTimeout(()=>{
          setShow(true)
     },7500)
     return()=>clearTimeout(timeout)
     },[show])

return(<div>{show?<div>
       <p>Current floor {place.floor} 
        {place.state === "up"
             ?", and we're moving up to "+place.targetFloor:null}  
        {place.state === "down"
             ?", and we're miving down to "+place.targetFloor:null}
             </p>

         <div className="contain">

               {place.floor === 9
               ?<div className="second"/>
                :<div className="one"/>}

              {place.floor === 8
               ?<div className="second"/>
                :<div className="one"/>}

                {place.floor === 7
               ?<div className="second"/>
                :<div className="one"/>}

                {place.floor === 6
               ?<div className="second"/>
                :<div className="one"/>}

                {place.floor === 5
               ?<div className="second"/>
                :<div className="one"/>}

                {place.floor === 4
               ?<div className="second"/>
                :<div className="one"/>}

                {place.floor === 3
               ?<div className="second"/>
                :<div className="one"/>}

                {place.floor === 2
               ?<div className="second"/>
                :<div className="one"/>}

                {place.floor === 1
               ?<div className="second"/>
                :<div className="one"/>}

                {place.floor === 0
               ?<div className="second"/>
                :<div className="one"/>}
                </div>
        </div>:null}</div>)
}