// this is not changed for functional components

import axios from "axios";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import customerReducer from './../reducer/customerReducer'

// these constants can be used as the names of the actions 
// so you minimise using the wrong string
export const FETCH_CUSTOMERS_BEGIN   = 'FETCH_CUSTOMERS_BEGIN';
export const FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS';
export const FETCH_CUSTOMERS_FAILURE = 'FETCH_CUSTOMERS_FAILURE';

export const ADD_CUSTOMER_BEGIN   = 'ADD_CUSTOMER_BEGIN';
export const ADD_CUSTOMER_SUCCESS = 'ADD_CUSTOMER_SUCCESS';
export const ADD_CUSTOMER_FAILURE = 'ADD_CUSTOMER_FAILURE';


export const fetchCUSTOMERsBegin = () => ({
  type: FETCH_CUSTOMERS_BEGIN
  
});

export const fetchCUSTOMERsSuccess = customers => ({
  type: FETCH_CUSTOMERS_SUCCESS,
  payload: { customers }
});

export const fetchCUSTOMERsFailure = error => ({
  type: FETCH_CUSTOMERS_FAILURE,
  payload: { error }
});

// Add CUSTOMER
export const addCUSTOMERBegin = () => ({
  type: ADD_CUSTOMER_BEGIN
});

export const addCUSTOMERSuccess = customers => ({
  type: ADD_CUSTOMER_SUCCESS,
  payload: { message: "success" }
});

export const addCUSTOMERFailure = error => ({
  type: ADD_CUSTOMER_FAILURE,
  payload: { error }
});




export function fetchCUSTOMERs() {
  return dispatch => {
    dispatch(fetchCUSTOMERsBegin());
    axios
    .get("http://localhost:8080/customers")
    .then(response => {
      console.log(response.data);
      dispatch(fetchCUSTOMERsSuccess(response.data._embedded.customers));
    })
    .catch(error => dispatch(fetchCUSTOMERsFailure(error)));
  }
}


export function addCUSTOMER(customer) {
  return dispatch => {
    dispatch(addCUSTOMERBegin());
    axios
    .post("http://localhost:8080/customers", customer)
    .then(response => {
      console.log(response.data);
      dispatch(addCUSTOMERSuccess(response.data));
    })
    .catch(error => dispatch(addCUSTOMERFailure(error)));
  }
}

const initialState = {
  customers: [],
  customer: {}
}

export const store = createStore(customerReducer, initialState, applyMiddleware(thunk));


