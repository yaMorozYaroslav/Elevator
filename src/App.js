import React from 'react';
import GoogleLogin from 'react-google-login';
import {File} from './storage/File';

export function App(){
	return <File/>
  /*const handleFailure = (result) => {
  	alert(result);
  };
   const handleLogin = (googleData) => {
   	console.log(googleData);
   };
	return(
     <div className="App">
       <header className="App-header">
          <h1>React Google Login App</h1>
         <div>
          <GoogleLogin
        clientId={process.env/REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cooliePolicy={'single_host_origin'}
          ></GoogleLogin>
         </div>
        </header>
        </div>
		)*/
}