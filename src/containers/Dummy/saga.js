import { takeLatest, all } from 'redux-saga/effects'
import { commonSaga } from '../../middleware/api'

import {
  GET_DUMMY_API
} from './constants'

function* dummySaga() {
  yield all([
    takeLatest(GET_DUMMY_API, commonSaga)
  ])
}

export default dummySaga
