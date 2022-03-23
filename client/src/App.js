import React from 'react';
import {Buttons} from './Buttons/Buttons.js';
import {Control} from './components/Control/Control';
import {Build} from './components/Build';
import {Welcome,Instruct} from './components/Intro/Intro';
import './App.css';

export function App(){
  return (<><div className="flex">
  	     <div ><Control/></div>
         <div><Buttons/><Build/></div>
            </div>
            <Welcome/>
            <Instruct/></>);
}