import axios from 'axios'

const url ='https://back-elevators.herokuapp.com'

export const fetchElvs =()=> axios.get(`${url}/elevators`)
export const moveFirst =()=> axios.put(`${url}/floor/9`)