import {
  POST_SIGN_IN,
  POST_SIGN_IN_SUCCESS,
  POST_SIGN_IN_FAILED,
  POST_REGISTER,
  POST_REGISTER_SUCCESS,
  POST_REGISTER_FAILED,
  USER_SIGN_OUT,
  USER_SIGN_OUT_SUCCESS
} from './constants';
import produce from 'immer';
const initialState = {
  loading: false,
  currentUser: localStorage.getItem('currentUser') || false,
  authUser: JSON.parse(localStorage.getItem('authUser'), {}) || {},
  register: null
};
const appReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case POST_REGISTER:
      case POST_SIGN_IN:
        draft.loading = true;
        break;

      case POST_SIGN_IN_SUCCESS:
        draft.loading = false;
        draft.currentUser = true;
        draft.authUser = action.payload;
        break;

      case POST_REGISTER_SUCCESS:
        draft.loading = false;
        break;
      case USER_SIGN_OUT:
        draft.loading = true;
        break;
      case USER_SIGN_OUT_SUCCESS:
        draft.loading = false;
        draft.currentUser = false;
        draft.authUser = {};
        break;
      case POST_REGISTER_FAILED:
      case POST_SIGN_IN_FAILED:
        draft.error = action.error;
        break;
      default: {
        return state;
      }
    }
  });
};

export default appReducer;
