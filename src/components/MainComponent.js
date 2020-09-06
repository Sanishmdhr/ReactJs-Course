import React, { Component } from 'react'
import Menu from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomeComponent from './HomeComponent';

class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dishes: DISHES,
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
          <HomeComponent/>
        )
      }
    return (
      <div>
        {/* <Header />

        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetailComponent dishSelected={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />

        <Footer /> */}


        <Header />
        <Switch>
          <Route  path="/home" component={HomePage}  />
          <Route path="/menu" component={() => <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }

}

export default Main;