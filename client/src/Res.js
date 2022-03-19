import axios from 'axios';

export const fetcher = async() =>{
  const result = await axios.get("http://localhost:8080/elevators")
                            .then(({data})=>data);
    return result;
}
