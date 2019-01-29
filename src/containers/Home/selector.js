import { createSelector } from 'reselect'

export const selectGlobal = state => state.home

export const makeSelectCharacterList = () =>
  createSelector(selectGlobal, globalState => globalState.data)

export const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.error)

  export const makeSelectmeta = () =>
  createSelector(selectGlobal, globalState => globalState.meta)

export const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.loading)

