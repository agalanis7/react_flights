import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';


function App() {
  return (

    
    <div className="App">
      <Form />
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a p tag in app.js.  This and logo are wrapped in header tag wit className="App-header" header className="App-header"
        </p>
      </header>
    </div>
    
  )
}

export default App;
