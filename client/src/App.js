import React from 'react';
import {Buttons} from './Buttons.js';
import {Control} from './components/Control/Control';
import {getBuild} from './components/getBuild';

export function App(){
  return (<>
  	     <Control/>
         <Buttons/>
         <getBuild>
            </>);
}