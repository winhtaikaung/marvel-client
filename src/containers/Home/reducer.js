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
import produce from "immer";
// The initial state of the App
export const initialState = {
  data: [],
  error: null,
  meta: {},
  loading: false
};

const dummyReducer = (state = initialState, action) => {
  return produce(state, draft => {
    
    switch (action.type) {
      case GET_CHARACTER_SEARCH_API:
        draft.loading = true;
        break;
      case GET_CHARACTER_SEARCH_API_SUCCESS:
        draft.data = action.payload.data.results || [];
        draft.meta = {
          count: action.payload.data.count,
          limit: action.payload.data.limit,
          offset: action.payload.data.offset,
          total: action.payload.data.total
        };
        draft.loading = false;
        break;
      case GET_CHARACTER_SEARCH_API_FAILED:
        draft.error = action.payload.error;
        draft.loading = false;
        break;
      default:
        return state
        
    }
  });
};

export default dummyReducer;
