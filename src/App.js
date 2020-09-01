import React from 'react';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
function App() {
  return (
    <div className="App">
    {/* 
      1. install bootstrap, reactstrap and react-popper 
      2. we will link bootstrap in our project 
      3. create a basic navbar
    
     */}

     <Navbar color="warning" dark expand='md'>
        <div className='container'>
            <NavbarBrand href='/'>
              Food Fusion
            </NavbarBrand>
        </div>
     </Navbar>


    </div>
  );
}

export default App;
