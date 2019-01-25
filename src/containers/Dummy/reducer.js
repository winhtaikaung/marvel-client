/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {GET_DUMMY_API, GET_DUMMY_API_SUCCESS, GET_DUMMY_API_FAILED} from './constants';

// The initial state of the App
export const initialState = {
  data: {},
  error: null,
  loading: false
}

function dummyReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DUMMY_API:

      return {
        ...state,
        loading: true
      }
    case GET_DUMMY_API_SUCCESS:

      return {
        ...state,
        data: action.payload,
        loading: false
      }
    case GET_DUMMY_API_FAILED:

      return {
        ...state,
        error: action.payload.error,
        loading: false
      }
    default:
      return state;
  }
}

export default dummyReducer;
