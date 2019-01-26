import { takeLatest, all } from 'redux-saga/effects'
import { commonSaga } from '../../middleware/api'

import {
  POST_SIGN_IN
} from './constants'

function* appSaga() {
  yield all([
    takeLatest(POST_SIGN_IN, commonSaga)
  ])
}

export default appSaga
