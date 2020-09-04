import React, { Component } from 'react'
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import {DISHES} from '../shared/dishes';
class Main extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       dishes:DISHES,
       selectedDish:null
    }
  }
  
  onDishSelect(dishId){
    this.setState({
      selectedDish:dishId //1 2 3
    })
  }

  render(){
    return (
      <div>
       <Navbar color="primary" dark expand='md'>
          <div className='container'>
              <NavbarBrand href='/'>
                Food Fusion
              </NavbarBrand>
          </div>
       </Navbar>
  
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishDetailComponent dishSelected={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
  
      </div>
    );
  }
    
  }
  
  export default Main;