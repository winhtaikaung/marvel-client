import { takeLatest, all } from 'redux-saga/effects'
import { commonSaga } from '../../middleware/api'

import {
  GET_CHARACTER_SEARCH_API
} from './constants'

function* homeSaga() {
  yield all([
    takeLatest(GET_CHARACTER_SEARCH_API, commonSaga)
  ])
}

export default homeSaga
