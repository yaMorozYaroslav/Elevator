import React from 'react';
import axios from 'axios';

export const getElvs = async()=>{
  const result = await axios
           .get('http://localhost:8080/elevators')
           .then(({data})=>data)
   return result;
}
