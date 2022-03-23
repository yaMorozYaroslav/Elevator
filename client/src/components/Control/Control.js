import React from 'react';
import axios from 'axios';
import './control.css';
import {Elv1} from '../Elvs/Elv1';
import {Elv2} from '../Elvs/Elv2';
import {Elv3} from '../Elvs/Elv3';

export const axioser = async () =>{
     const result = await axios.get("http://localhost:8080/elevators").then(({data})=>data);
     return result;
 }

 
export const Control=()=>{return(<div className="container">
         <div className="element"><Elv1/></div>
         <div className="element"><Elv2/></div>
         <div className="element"><Elv3/></div>
                        </div>)}