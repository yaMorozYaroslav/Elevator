import React from 'react';
import {Buttons} from './Buttons.js';
import {Control} from './components/Control/Control';
import {Build} from './components/Build';

export function App(){
  return (<>
  	     <Control/>
         <Buttons/>
         <Build/>
            </>);
}