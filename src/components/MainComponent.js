import React, { Component } from 'react'
import Menu from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomeComponent from './HomeComponent';
import ContactUs from './ContactUsComponent';

class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dishes: DISHES,
      comments:COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS,      
      selectedDish: null
    }
  }

  onDishSelect(dishId) {
    this.setState({
      selectedDish: dishId //1 2 3
    })
  }

  render() {

      const HomePage = () => {
        return(
          <HomeComponent
            //featured dish
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            //promotion
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
            //featured leader
              leader={this.state.leaders.filter((leader)=> leader.featured)[0]}

          />
        )
      }
    return (
      <div>
        <Header />
        <Switch>
          <Route  path="/home" component={HomePage}  />
          <Route path="/menu" component={() => <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />} />
          <Route  path="/contactus" component={() => <ContactUs/>}  />

          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }

}

export default Main;