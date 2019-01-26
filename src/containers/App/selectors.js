import { createSelector } from 'reselect'

const selectGlobal = state => state.global

export const makeSelectCurrentUser = () =>
  createSelector(selectGlobal, globalState => globalState.currentUser)

export const makeSelectAuthUser = () =>
  createSelector(selectGlobal, globalState => globalState.authUser)

