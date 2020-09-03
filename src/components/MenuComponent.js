// create a menu component 
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';
import DishDetailComponent from './DishDetailComponent';


class Menu extends Component {

  constructor(props) {
    super(props)

    //a state is a basic method to declare a variable in a component
    this.state = {
      selectedDish:null
    }
  }

  onDishSelect(dish){
    this.setState({
      selectedDish:dish
    })
  }

  

  render() {
    const menu = this.props.dishes.map(dish => {
      return (
        <div key={dish.id} className='col-12 col-md-5 m-1'>
          <Card 
          onClick={() => this.onDishSelect(dish)}>
            <CardImg width='100%' src={dish.image} alt={dish.name}/>
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      )
    })

    //current component -> states -> dishes 
    return (
      <div className='container'>
        <div className='row'>
          {menu}
        </div>
       
           <DishDetailComponent dishSelected={this.state.selectedDish} />
         
      
      </div>
    )
  }

}

export default Menu;