import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';

class App extends Component {

render(){
  return (
    <div className="App">
    {/* 
      1. install bootstrap, reactstrap and react-popper 
      2. we will link bootstrap in our project 
      3. create a basic navbar
    
     */}
      <Main/>
    </div>
  );
}
  
}

export default App;
