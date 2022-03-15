<<<<<<< HEAD
import './App.css';
import React from 'react';

export function App() {

};

=======
import React, {Component}from'react';
import Header from './Header';
import Books from './Books'
import './App.css';

class App extends Component{ 
  render(){
    return(
      <div className="App">
          <Header />
          <Books />
        </div>
        );
     }
   }
export default App;
>>>>>>> 9beb6eb0867800804ad5035756f7d5c7cc3f1671
