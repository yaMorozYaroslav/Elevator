import React from 'react';
import Button from './components/Button/Button';
import Container from './components/Container/Container';
import liftData from './data';
import Lift from './components/Lift/Lift';
import './App.css';

export const App = () => {
  return(
   <div className="flex">
     <div className="main-space">
       <div className="btn-holder">
         {
          liftData.map((lift, idx)=>(
            <Button key={idx} 
                name={lift.name} 
                value={lift.name}/>
                ))
             }
         </div>
         <div className="ctn-holder">
            {liftData.map((container, idx)=> (
              <Container key={idx}/>
              ))
            }
            <Lift />
          </div>
         </div>
        </div>
    )
}
export default App;

