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

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  }
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