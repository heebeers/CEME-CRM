// This does not change whether functional or class based components


// import the various actions from actions.js which are used in the reducer
import { ADD_INTERACTION_BEGIN,
  ADD_INTERACTION_SUCCESS,
  ADD_INTERACTION_FAILURE } from '../actions/actions';

  import { UPDATE_INTERACTION_BEGIN,
    UPDATE_INTERACTION_SUCCESS,
    UPDATE_INTERACTION_FAILURE } from '../actions/actions';

import { FETCH_INTERACTIONS_BEGIN,
  FETCH_INTERACTIONS_SUCCESS,
  FETCH_INTERACTIONS_FAILURE } from '../actions/actions';

import { GET_INTERACTION_BEGIN,
    GET_INTERACTION_SUCCESS,
    GET_INTERACTION_FAILURE } from '../actions/actions';

import { FETCH_CUSTOMERS_BEGIN,
 FETCH_CUSTOMERS_SUCCESS,
 FETCH_CUSTOMERS_FAILURE } from './../actions/actions';

 import { GET_CUSTOMER_BEGIN,
  GET_CUSTOMER_SUCCESS,
  GET_CUSTOMER_FAILURE } from './../actions/actions';

 import { UPDATE_CUSTOMER_BEGIN,
   UPDATE_CUSTOMER_SUCCESS,
   UPDATE_CUSTOMER_FAILURE } from './../actions/actions';

 import { ADD_CUSTOMER_BEGIN,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_FAILURE } from './../actions/actions';

 // an initial state variable used at the start
 const initialState = {
    customers: [],
    interactions:[],
    loading: false,
    error: null,
   
  };

  // the reducer is here. It is going to return different states depending upon the action
 export default  function customersReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_CUSTOMERS_BEGIN:
        return {
          ...state,
          loading:true,
          error: null
        }
      case FETCH_CUSTOMERS_SUCCESS:
        return {
          ...state,
          loading: false,
          customers: action.payload.customers
        };
      case FETCH_CUSTOMERS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          customers: []
        };
        case GET_CUSTOMER_BEGIN:
          return {
            ...state,
            loading:true,
            error: null
          }
        case GET_CUSTOMER_SUCCESS:
          return {
            ...state,
            loading: false,
            customer: action.payload.customer
          };
        case GET_CUSTOMER_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload.error,
            customers: []
          };
          case UPDATE_CUSTOMER_BEGIN:
            return {
              ...state,
              loading:true,
              error: null
            }
          case UPDATE_CUSTOMER_SUCCESS:
            return {
              ...state,
              loading: false
            };
          case UPDATE_CUSTOMER_FAILURE:
            return {
              ...state,
              loading: false,
              error: action.payload.error,
              customer: []
            };
          case ADD_CUSTOMER_BEGIN:
          return {
            ...state,
            loading:true,
            error: null
          }
        case ADD_CUSTOMER_SUCCESS:
          return {
            ...state,
            loading: false            
          };
        case ADD_CUSTOMER_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload.error            
          };
          case FETCH_INTERACTIONS_BEGIN:
            return {
              ...state,
              loading:true,
              error: null
            }
          case FETCH_INTERACTIONS_SUCCESS:
            return {
              ...state,
              loading: false,
              interactions: action.payload.interactions
            };
          case FETCH_INTERACTIONS_FAILURE:
            return {
              ...state,
              loading: false,
              error: action.payload.error,
              interactions: []
            };
            case GET_INTERACTION_BEGIN:
            return {
              ...state,
              loading:true,
              error: null
            }
          case GET_INTERACTION_SUCCESS:
            return {
              ...state,
              loading: false,
              interaction: action.payload.interaction
            };
          case GET_INTERACTION_FAILURE:
            return {
              ...state,
              loading: false,
              error: action.payload.error,
              interactions: []
            };
          case ADD_INTERACTION_BEGIN:
            return {
              ...state,
              loading:true,
              error: null
            }
          case ADD_INTERACTION_SUCCESS:
            return {
              ...state,
              loading: false,
              interactions: action.payload.interactions
            };
          case ADD_INTERACTION_FAILURE:
            return {
              ...state,
              loading: false,
              error: action.payload.error,
              interactions: []
            };
          case UPDATE_INTERACTION_BEGIN:
            return {
              ...state,
              loading:true,
              error: null
            }
          case UPDATE_INTERACTION_SUCCESS:
            return {
              ...state,
              loading: false
            };
          case UPDATE_INTERACTION_FAILURE:
            return {
              ...state,
              loading: false,
              error: action.payload.error,
              interaction: []
            };
      default:
          return state;
      }  
  }