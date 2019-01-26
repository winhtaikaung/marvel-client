import {
  POST_SIGN_IN,
  POST_SIGN_IN_SUCCESS,
  POST_SIGN_IN_FAILED,
  POST_REGISTER,
  POST_REGISTER_SUCCESS,
  POST_REGISTER_FAILED
} from "./constants";
const initialState = {
  loading: false,
  currentUser: localStorage.getItem("currentUser") || false,
  authUser: JSON.parse(localStorage.getItem("authUser"), {}) || {},
  register:null
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REGISTER:
    case POST_SIGN_IN: {
      return {
        ...state,
        loading: true
      };
    }
    case POST_REGISTER_SUCCESS:
    case POST_SIGN_IN_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentUser: true,
        authUser: action.payload
      };
    }
    case POST_REGISTER_FAILED:
    case POST_SIGN_IN_FAILED: {
      return {
        ...state,
        loading: false,
        currentUser: false,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
