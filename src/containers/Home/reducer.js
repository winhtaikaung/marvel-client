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

import {
  GET_CHARACTER_SEARCH_API,
  GET_CHARACTER_SEARCH_API_SUCCESS,
  GET_CHARACTER_SEARCH_API_FAILED
} from "./constants";

// The initial state of the App
export const initialState = {
  data: [],
  error: null,
  meta: {},
  loading: false
};

function dummyReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTER_SEARCH_API:
      return {
        ...state,
        loading: true
      };
    case GET_CHARACTER_SEARCH_API_SUCCESS:
      return {
        ...state,
        data: action.payload.data.results || [],
        meta: {
          // count: action.payload.data.count,
          // limit: action.payload.data.limit,
          // offset: action.payload.data.offset,
          // total: action.payload.data.total

          count: 10,
          limit: 10,
          offset: 10,
          total: 200
        },
        loading: false
      };
    case GET_CHARACTER_SEARCH_API_FAILED:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };
    default:
      return state;
  }
}

export default dummyReducer;
