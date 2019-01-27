import { takeLatest, all,put } from 'redux-saga/effects'
import { commonSaga } from '../../middleware/api'

import {
  POST_SIGN_IN,
  POST_REGISTER,
  USER_SIGN_OUT,
} from './constants'
import {userSignOutSuccess} from './actions';


function* userSignOutSaga(action) {
  const response = {
    currentUser: false,
  }
  yield put(userSignOutSuccess(response))
  localStorage.removeItem('currentUser')
  localStorage.removeItem('authUser')
}



function* appSaga() {
  yield all([
    takeLatest(POST_SIGN_IN, commonSaga),
    takeLatest(POST_REGISTER, commonSaga),
    takeLatest(USER_SIGN_OUT, userSignOutSaga)
  ])
}

export default appSaga
