import { fromJS } from 'immutable';

import {
  selectGlobal,
  makeSelectCharacterList,
  makeSelectError,
  makeSelectmeta,
  makeSelectLoading
} from '../selector';

describe('selectGlobal', () => {
  it('should select the detail state', () => {
    const globalState = {}
    const mockedState = {
      detail: globalState,
    };
    console.log(selectGlobal)
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('selectMeta', () => {
    it('should select the meta key of state', () => {
       const currentUserSelector = makeSelectmeta()
      const meta=true
      const mockedState = {
        detail: {
            meta:meta
          },
      };
      
      expect(currentUserSelector(mockedState)).toEqual(meta);
    });
});

describe('selectCharacterList', () => {
    it('should select the characterList', () => {
      const currentAuthSelector = makeSelectCharacterList()
      const characterList=[1,2,3,4]
      const mockedState = {
        detail: {
          data:characterList
          },
      };
      
      expect(currentAuthSelector(mockedState)).toEqual(characterList);
    });
});

describe('selectLoading', () => {
    it('should select the loading state', () => {
      const currentAuthSelector = makeSelectLoading()
      const loading=true
      const mockedState = {
        detail: {
          isloading:loading
          },
      };
      
      expect(currentAuthSelector(mockedState)).toEqual(loading);
    });
});

describe('selectError', () => {
    it('should select the error state', () => {
      const currentErrorSelector = makeSelectError()
      const error={}
      const mockedState = {
        detail: {
            error:error
        },
      };
      
      expect(currentErrorSelector(mockedState)).toEqual(error);
    });
});

