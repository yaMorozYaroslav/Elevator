import React from 'react';



export function App(){
  const [place, setElev] = React.useState([]);
  React.useEffect(()=>{
    const one = {floor: '1'};
    axios.put('https://localhost/8080/floors')
  })
}