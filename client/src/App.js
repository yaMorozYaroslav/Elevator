import React from 'react';
import {Buttons} from './Buttons/Buttons.js';
import {Control} from './components/Control/Control';
import {Build} from './components/Build';
import {Intro} from './components/Intro/Intro';
import {Instru} from './components/Intro/Instru';
import './App.css';

export function App(){
  return (<><div className="flex">
  	     <div ><Control/></div>
         <div><Buttons/><Build/></div>
            </div>
            <Intro/>
            <Instru/></>);
}