import axios from 'axios'

const url ='https://back-elevators.herokuapp.com/elevators'

export const fetchElvs =()=> axios.get(url)
export const moveFirst =()=> axios.put(`${url}/floor/1`)