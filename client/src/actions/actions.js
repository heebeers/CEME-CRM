// this is not changed for functional components

import axios from "axios";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import rootReducer from './../reducer/index';
import customersReducer from "../reducer/customerReducer";
import { composeWithDevTools } from "redux-devtools-extension";


// these constants can be used as the names of the actions 
// so you minimise using the wrong string
export const FETCH_CUSTOMERS_BEGIN   = 'FETCH_CUSTOMERS_BEGIN';
export const FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS';
export const FETCH_CUSTOMERS_FAILURE = 'FETCH_CUSTOMERS_FAILURE';

export const GET_CUSTOMER_BEGIN   = 'GET_CUSTOMER_BEGIN';
export const GET_CUSTOMER_SUCCESS = 'GET_CUSTOMER_SUCCESS';
export const GET_CUSTOMER_FAILURE = 'GET_CUSTOMER_FAILURE';

export const ADD_CUSTOMER_BEGIN   = 'ADD_CUSTOMER_BEGIN';
export const ADD_CUSTOMER_SUCCESS = 'ADD_CUSTOMER_SUCCESS';
export const ADD_CUSTOMER_FAILURE = 'ADD_CUSTOMER_FAILURE';

export const UPDATE_CUSTOMER_BEGIN   = 'UPDATE_CUSTOMER_BEGIN';
export const UPDATE_CUSTOMER_SUCCESS = 'UPDATE_CUSTOMER_SUCCESS';
export const UPDATE_CUSTOMER_FAILURE = 'UPDATE_CUSTOMER_FAILURE';

export const FETCH_INTERACTIONS_BEGIN   = 'FETCH_INTERACTIONS_BEGIN';
export const FETCH_INTERACTIONS_SUCCESS = 'FETCH_INTERACTIONS_SUCCESS';
export const FETCH_INTERACTIONS_FAILURE = 'FETCH_INTERACTIONS_FAILURE';

export const GET_INTERACTION_BEGIN   = 'GET_INTERACTION_BEGIN';
export const GET_INTERACTION_SUCCESS = 'GET_INTERACTION_SUCCESS';
export const GET_INTERACTION_FAILURE = 'GET_INTERACTION_FAILURE';

export const ADD_INTERACTION_BEGIN   = 'ADD_INTERACTION_BEGIN';
export const ADD_INTERACTION_SUCCESS = 'ADD_INTERACTION_SUCCESS';
export const ADD_INTERACTION_FAILURE = 'ADD_INTERACTION_FAILURE';

export const UPDATE_INTERACTION_BEGIN   = 'UPDATE_INTERACTION_BEGIN';
export const UPDATE_INTERACTION_SUCCESS = 'UPDATE_INTERACTION_SUCCESS';
export const UPDATE_INTERACTION_FAILURE = 'UPDATE_INTERACTION_FAILURE';

// Add Interaction
export const addINTERACTIONBegin = () => ({
  type: ADD_CUSTOMER_BEGIN
});

export const addINTERACTIONSuccess = customers => ({
  type: ADD_CUSTOMER_SUCCESS,
  payload: { message: "success" }
});

export const addINTERACTIONFailure = error => ({
  type: ADD_CUSTOMER_FAILURE,
  payload: { error }
});

// Get All Interactions

export const getINTERACTIONBegin = () => ({
  type: GET_INTERACTION_BEGIN
  
});

export const getINTERACTIONSuccess = interaction => ({
  type: GET_INTERACTION_SUCCESS,
  payload: { interaction }
});

export const getINTERACTIONFailure = error => ({
  type: GET_INTERACTION_FAILURE,
  payload: { error }
});

// Update Interaction
export const updateINTERACTIONBegin = () => ({
  type: UPDATE_INTERACTION_BEGIN
});

export const updateINTERACTIONSuccess = interactions => ({
  type: UPDATE_INTERACTION_SUCCESS,
  payload: { message: "success" }
});

export const updateINTERACTIONFailure = error => ({
  type: UPDATE_INTERACTION_FAILURE,
  payload: { error }
});

// Fetch Interactions by Customer Id
export const fetchINTERACTIONsBegin = () => ({
  type: FETCH_INTERACTIONS_BEGIN
  
});

export const fetchINTERACTIONsSuccess = interactions => ({
  type: FETCH_INTERACTIONS_SUCCESS,
  payload: { interactions }
});

export const fetchINTERACTIONsFailure = error => ({
  type: FETCH_INTERACTIONS_FAILURE,
  payload: { error }
});

// Fetch Customers
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

//Get Customer
export const getCUSTOMERBegin = () => ({
  type: GET_CUSTOMER_BEGIN
  
});

export const getCUSTOMERSuccess = customer => ({
  type: GET_CUSTOMER_SUCCESS,
  payload: { customer }
});

export const getCUSTOMERFailure = error => ({
  type: GET_CUSTOMER_FAILURE,
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

// Update CUSTOMER
export const updateCUSTOMERBegin = () => ({
  type: UPDATE_CUSTOMER_BEGIN
});

export const updateCUSTOMERSuccess = customers => ({
  type: UPDATE_CUSTOMER_SUCCESS,
  payload: { message: "success" }
});

export const updateCUSTOMERFailure = error => ({
  type: UPDATE_CUSTOMER_FAILURE,
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

export function getCUSTOMER(id) {
  return dispatch => {
    dispatch(getCUSTOMERBegin());
    axios
    .get("http://localhost:8080/customers/"+ id)
    .then(response => {
      console.log(response.data);
      dispatch(getCUSTOMERSuccess(response.data));
    })
    .catch(error => dispatch(getCUSTOMERFailure(error)));
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

export function updateCUSTOMER(customer) {
  return dispatch => {
    dispatch(updateCUSTOMERBegin());
    console.log(customer._links.self.href.substring(32));
    axios
    //.post("http://localhost:8080/customers", customer)
    .put("http://localhost:8080/customers/" + customer._links.self.href.substring(32), customer)
    .then(response => {
      console.log(response.data);
      dispatch(updateCUSTOMERSuccess(response.data));
    })
    .catch(error => dispatch(updateCUSTOMERFailure(error)));
  }
}

export function fetchINTERACTION(customerId) {
  return dispatch => {
    dispatch(fetchINTERACTIONsBegin());
    axios
    .get("http://localhost:8080/interactions/search/findByCustomerId?id="+ customerId)
    .then(response => {
      console.log(response.data);
      dispatch(fetchINTERACTIONsSuccess(response.data._embedded.interactions));
    })
    .catch(error => dispatch(fetchINTERACTIONsFailure(error)));
  }
}

export function getINTERACTION(id) {
  return dispatch => {
    dispatch(getINTERACTIONBegin());
    axios
    .get("http://localhost:8080/interactions/" + id)
    .then(response => {
      console.log(response.data);
      dispatch(getINTERACTIONSuccess(response.data));
    })
    .catch(error => dispatch(getINTERACTIONFailure(error)));
  }
}

export function updateINTERACTION(interaction) {
  return dispatch => {
    dispatch(updateINTERACTIONBegin());
    axios
    .put("http://localhost:8080/interactions/" + interaction._links.self.href.substring(35), interaction)
    .then(response => {
      console.log(response.data);
      dispatch(updateINTERACTIONSuccess(response.data));
    })
    .catch(error => dispatch(updateINTERACTIONFailure(error)));
  }
}

export function addINTERACTION(interaction) {
  return dispatch => {
    dispatch(addINTERACTIONBegin());
    axios
    .post("http://localhost:8080/interactions", interaction)
    .then(response => {
      console.log(response.data);
      dispatch(addINTERACTIONSuccess(response.data));
    })
    .catch(error => dispatch(addINTERACTIONFailure(error)));
  }
}

const initialState = {
  customers: [],
  customer: {},
  interactions: [],
  interaction: {}
}

export const store = createStore(customersReducer, initialState, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));


