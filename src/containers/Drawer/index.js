import React, { Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { createStructuredSelector } from "reselect";
import { Drawer } from "antd";

import injectReducer from "../../utils/injectReducer";
import injectSaga from "../../utils/injectSaga";

import { getCharacterDetail } from "./actions";
import reducer from "./reducer";
import saga from "./saga";
import {
  makeSelectCharacterList,
  makeSelectError,
  makeSelectmeta,
  makeSelectLoading
} from "./selector";

const DrawerContainer = props => {
  
  props.searchCharacter({"id":props.match.params.id})
  return (
    <Fragment>
      <Drawer
        width={"50%"}
        title="Basic Drawer"
        placement="left"
        closable={true}
        onClose={() => {
          props.history.push("/p/dummy");
        }}
        visible={true}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectCharacterList(),
  error: makeSelectError(),
  meta: makeSelectmeta(),
  loading: makeSelectLoading()
});

const mapDispatchToProps = dispatch => {
  return {
    searchCharacter: payload => dispatch(getCharacterDetail(payload))
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "detail", reducer });
const withSaga = injectSaga({ key: "detail", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(DrawerContainer);
