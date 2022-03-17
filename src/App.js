import React from 'react';
import GoogleLogin from 'react-google-login';

export function App(){
	return(
     <div className="App">
       <header className="App-header">
          <h1>React Google Login App</h1>
         <div>
          <GoogleLogin></GoogleLogin>
         </div>
        </header>
        </div>
		)
}