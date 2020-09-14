import React, { Component } from 'react'

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// components 
import HomeComponent from './HomeComponent';
import ContactUs from './ContactUsComponent';
import Menu from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import AboutUs from './AboutUsComponent';


//store
import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, postComment, fetchLeaders, addFeedback } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
//mapStateToProps -> takes the current state from the store and converts it into a prop to be used by the respective component

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes()) },
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
  fetchComments: () => { dispatch(fetchComments()) },
  fetchPromos: () => { dispatch(fetchPromos()) },
  fetchLeaders: () => { dispatch(fetchLeaders()) },
  addFeedback:(firstname, lastname, telnum, email, agree, contactType, message) => dispatch(addFeedback(firstname, lastname, telnum, email, agree, contactType, message))

})



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

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();


  }

  render() {

    const HomePage = () => {
      return (
        <HomeComponent
          //featured dish
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishLoading={this.props.dishes.isLoading}
          dishErrmess={this.props.dishes.errmess}
          //promotion
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promosLoading={this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errMess}
          //featured leader
          leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
          leadersLoading={this.props.leaders.isLoading}
          leadersErrMess={this.props.leaders.errMess}
        />
      )
    }

    const DishDetail = ({ match }) => {
      return (
        // filter out the specific dish according to the id parameter and send the single dish
        <DishDetailComponent dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errmess}
          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
        />
      )

    }
    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/menu" component={() =>
                <Menu dishes={this.props.dishes.dishes}
                  isLoading={this.props.dishes.isLoading}
                  errMess={this.props.dishes.errmess}
                  onClick={(dishId) => this.onDishSelect(dishId)} />} />
              <Route exact path="/menu/:dishId" component={DishDetail} />
              <Route path="/contactus" component={() => <ContactUs resetForm={this.props.resetFeedbackForm} addFeedback = {this.props.addFeedback} />} />
              <Route path="/aboutus" component={() => <AboutUs leaders={this.props.leaders.leaders}
                leadersLoading={this.props.leaders.isLoading}
                leadersErrMess={this.props.leaders.errMess}
              />} />
              <Redirect to='/home' />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }

}

//store has been connected to our component
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));