// This does not change whether functional or class based components


// import the various actions from actions.js which are used in the reducer
import { FETCH_CUSTOMERS_BEGIN,
 FETCH_CUSTOMERS_SUCCESS,
 FETCH_CUSTOMERS_FAILURE } from './../actions/actions';

 import { ADD_CUSTOMER_BEGIN,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_FAILURE } from './../actions/actions';

 // an initial state variable used at the start
 const initialState = {
    customers: [],
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
        case ADD_CUSTOMER_BEGIN:
          return {
            ...state,
            loading:true,
            error: null
          }
        case ADD_CUSTOMER_SUCCESS:
          return {
            ...state,
            loading: false,
            
          };
        case ADD_CUSTOMER_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload.error,
            
          };
      default:
          return state;
      }  
  }