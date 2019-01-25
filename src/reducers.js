import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from './utils/history';
// import { reducer as formReducer } from 'redux-form'

// import globalReducer from 'containers/App/reducer'
// import orderReducer from 'containers/Orders/reducer';
// import userReducer from 'containers/Profile/reducer';



const appReducer = combineReducers({
    router: connectRouter(history),
//   global: globalReducer,
//   form: formReducer,
//   order:orderReducer,
//   user:userReducer
  

  // ...injectedReducers
})



const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default function createReducer(injectedReducers) {
  return rootReducer
}
