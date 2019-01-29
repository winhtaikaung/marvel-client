import { createSelector } from 'reselect'

export const selectGlobal = state => state.global

export const makeSelectCurrentUser = () =>
  createSelector(selectGlobal, globalState => globalState.currentUser)

export const makeSelectAuthUser = () =>
  createSelector(selectGlobal, globalState => globalState.authUser)

export const makeSelectLoading= () =>
  createSelector(selectGlobal, globalState => globalState.loading)

export const makeSelectError= () =>
  createSelector(selectGlobal, globalState => globalState.error)

