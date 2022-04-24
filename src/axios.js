import axios from 'axios'

const url = 'https://back-elevators.herokuapp.com/elevators'

export const fetchSides =()=>axios.get(url)