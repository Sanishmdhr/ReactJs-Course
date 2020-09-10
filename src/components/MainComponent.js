import React, { Component } from 'react'

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

// components 
import HomeComponent from './HomeComponent';
import ContactUs from './ContactUsComponent';
import Menu from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import AboutUs from './AboutUsComponent';


//store
import {connect} from 'react-redux';

//mapStateToProps -> takes the current state from the store and converts it into a prop to be used by the respective component

const mapStateToProps = state => {
  return{
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
  }
}

class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
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
      return (
        <HomeComponent
          //featured dish
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          //promotion
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          //featured leader
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}

        />
      )
    }

    const DishDetail = ({ match }) => {
      return (
        // filter out the specific dish according to the id parameter and send the single dish
        <DishDetailComponent dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}

        />
      )

    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />} />
          <Route exact path="/menu/:dishId" component={DishDetail} />
          <Route path="/contactus" component={() => <ContactUs />} />
          <Route path="/aboutus" component={() => <AboutUs leaders={this.props.leaders}/>} />

          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }

}

//store has been connected to our component
export default withRouter(connect(mapStateToProps)(Main));