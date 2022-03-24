import React from 'react';
import {axioser} from '../Control/Control';
import './Elvs.css';
import Man from './Man.png';

export const Elv3 =()=>{
	const [place, setData] = React.useState([]);
     const [show, setShow] = React.useState(false);
React.useEffect(()=>{
	axioser().then(data=>setData(data[2]));     
},[place])
React.useEffect(()=>{
     const timeout = setTimeout(()=>{
          setShow(true)
     },8100)
     return()=>clearTimeout(timeout)
     },[show])
const realFlow = place.targetFloor + 1;

return (<div>{show?<div>
       <p>Current floor {place.floor+1} 
        {place.state === "up"
             ?", and we're moving up to "+realFlow:null}  
        {place.state === "down"
             ?", and we're miving down to "+realFlow:null}
             </p>

         <div className="contain">

               {place.floor === 9
               ?<img src={Man}/>
                :<div className="one"/>}

              {place.floor === 8
               ?<img src={Man}/>
                :<div className="one"/>}

                {place.floor === 7
               ?<img src={Man}/>
                :<div className="one"/>}

                {place.floor === 6
               ?<img src={Man}/>
                :<div className="one"/>}

                {place.floor === 5
               ?<img src={Man}/>
                :<div className="one"/>}

                {place.floor === 4
               ?<img src={Man}/>
                :<div className="one"/>}

                {place.floor === 3
               ?<img src={Man}/>
                :<div className="one"/>}

                {place.floor === 2
               ?<img src={Man}/>
                :<div className="one"/>}

                {place.floor === 1
               ?<img src={Man}/>
                :<div className="one"/>}

                {place.floor === 0
               ?<img src={Man}/>
                :<div className="one"/>}
                </div> 
        </div>:null}</div>)
}