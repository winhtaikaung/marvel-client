import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';

import {getDummyData} from './actions'
import reducer from './reducer'
import saga from './saga'

export class DummyContainer extends React.Component {


  render(){
    return <div>Dummy Container is here</div>
  }
}






const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDummyAPI: () => dispatch(getDummyData())
  }
}



const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'dummy', reducer });
const withSaga = injectSaga({ key: 'dummy', saga });

export default compose(withReducer, withSaga, withConnect)(DummyContainer);
