import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';




// to fetch dishes

export const fetchDishes = () => (dispatch) => {

  dispatch(dishLoading(true));

  return fetch(baseUrl + 'dishes')
    .then(response => {
      if (response.ok) {
        return response;
      }
      else {
        var error = new Error('Error' + response.status + ":" + response.statusText)
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message)
        throw errmess;
      })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)))

}


export const dishLoading = () => ({
  type: ActionTypes.DISHES_LOADING
})

export const dishesFailed = (errmess) => ({
  type: ActionTypes.DIHSES_FAILED,
  payload: errmess
})


export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
})


//to fetch the comments 

export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + 'comments')
    .then(response => {
      if (response.ok) {
        return response;
      }
      else {
        var error = new Error('Error' + response.status + ":" + response.statusText)
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message)
        throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)))

}


export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
})

export const commentsFailed = (errmess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess
})


export const postComment = (dishId, rating, author, comment) => (dispatch) => {

  const newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  }
  newComment.date = new Date().toISOString();

  return fetch(baseUrl + 'comments', {
    method:'POST',
    body: JSON.stringify(newComment),
    headers:{
      "Content-Type":"application/json"
    },
    credentials: "same-origin"
  })
  .then(response => {
    if (response.ok) {
      return response;
    }
    else {
      var error = new Error('Error' + response.status + ":" + response.statusText)
      error.response = response;
      throw error;
    }
  },
    error => {
      var errmess = new Error(error.message)
      throw errmess;
    })
   .then(response => response.json())
   .then(comment => dispatch(addComment(comment)))
   .catch(error => {console.log('Post Comments',error.message) ;
  alert('Your Comment Could not be posted \n Error'+error.message)})

}

export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment
});


//fetch promos

export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading(true));

  return fetch(baseUrl + 'promotions')
    .then(response => {
      if (response.ok) {
        return response;
      }
      else {
        var error = new Error('Error' + response.status + ":" + response.statusText)
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message)
        throw errmess;
      })
    .then(response => response.json())
    .then(promotions => dispatch(addPromos(promotions)))
    .catch(error => dispatch(promosFailed(error.message)))
}

export const addPromos = (promotions) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promotions
})

export const promosFailed = (errmess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess
})

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING
})

//fetch leaders

export const fetchLeaders = () => (dispatch) => {
  dispatch(leadersLoading(true));

  return fetch(baseUrl + 'leaders')
    .then(response => {
      if (response.ok) {
        return response;
      }
      else {
        var error = new Error('Error' + response.status + ":" + response.statusText)
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message)
        throw errmess;
      })
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)))
}

export const addLeaders = (leaders) => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders
})

export const leadersFailed = (errmess) => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errmess
})

export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING
})


//add feedback
export const addFeedback= (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {

  const newfeedback = {
    firstname: firstname,
    lastname: lastname,
    telnum: telnum,
    email: email,
    agree: agree,
    contactType: contactType,
    message: message,
  }
  newfeedback.date = new Date().toISOString();

  return fetch(baseUrl + 'feedback', {
    method:'POST',
    body: JSON.stringify(newfeedback),
    headers:{
      "Content-Type":"application/json"
    },
    credentials: "same-origin"
  })
  .then(response => {
    if (response.ok) {
      return response;
    }
    else {
      var error = new Error('Error' + response.status + ":" + response.statusText)
      error.response = response;
      throw error;
    }
  },
    error => {
      var errmess = new Error(error.message)
      throw errmess;
    })
   .then(response => response.json())
   .then(feedback => alert('Thank You for your feedback \n' + JSON.stringify(feedback)))
   .catch(error => {console.log('Add Feedback',error.message) ;
  alert('Your Feedback Could not be posted \n Error'+error.message)})

}

