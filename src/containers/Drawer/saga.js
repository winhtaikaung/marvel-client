import { takeLatest, all } from 'redux-saga/effects'
import { commonSaga } from '../../middleware/api'

import {
  GET_CHARACTER_DETAIL
} from './constants'

function* navDrawerSaga() {
  yield all([
    takeLatest(GET_CHARACTER_DETAIL, commonSaga)
  ])
}

export default navDrawerSaga
