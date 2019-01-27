import React, { Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { createStructuredSelector } from "reselect";
import { Drawer, Col, Row, Divider, Skeleton } from "antd";

import injectReducer from "../../utils/injectReducer";
import injectSaga from "../../utils/injectSaga";
import isEmpty from "lodash/isEmpty";
import upperFirst from "lodash/upperFirst";
import { getCharacterDetail } from "./actions";
import reducer from "./reducer";
import saga from "./saga";
import {
  makeSelectCharacterList,
  makeSelectError,
  makeSelectmeta,
  makeSelectLoading
} from "./selector";
import { Link } from "react-router-dom";
import NotFoundPage from "../../pages/public/NotFoundPage";

const TitleDescription = ({ title, content, loading }) => (
  <Skeleton loading={loading} active>
    <div
      style={{
        padding: `16px`,
        color: "rgba(0,0,0,0.65)",
        marginBottom: `0.2em`
      }}
    >
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  </Skeleton>
);

const DescriptionItem = ({ title, content, loading }) => (
  <Skeleton loading={loading} active>
    <div
      style={{
        fontSize: 14,
        padding: `16px`,
        lineHeight: "22px",
        marginBottom: 3,
        color: "rgba(0,0,0,0.65)"
      }}
    >
      <h4
        style={{
          marginRight: 8,
          display: "inline-block",
          color: "rgba(0,0,0,0.85)"
        }}
      >
        {upperFirst(title)}:
      </h4>
      <p>
        <a target="_blank" href={content}>
          {content}
        </a>
      </p>
    </div>
  </Skeleton>
);

class StateDrawerContainer extends React.PureComponent {
  
  render() {
    const { history, data, loading,isOpen ,onClose,id} = this.props;

    return (
      <Fragment>
        <Drawer
          width={"50%"}
          
          placement="left"
          closable={true}
          onClose={() => {
            onClose()
          }}
          visible={isOpen}
        >
          <React.Fragment>
            <Row style={{ marginTop: `2em` }}>
              <Col span={24}>
                <div
                  style={{
                    width: `100%`,
                    height: `calc(100vh/2.5)`,
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: `url(${
                      !isEmpty(data) ? data[0].thumbnail.path : ""
                    }.${!isEmpty(data) ? data[0].thumbnail.extension : ""})`
                  }}
                >
                  <img
                    alt={``}
                    style={{
                      minHeight: "calc(100vh/3)",
                      minWidth: "100%",
                      MsFilter:
                        '"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"',
                      filter: "alpha(opacity=0)",
                      opacity: "0"
                    }}
                    src={`${!isEmpty(data) ? data[0].thumbnail.path : ""}.${
                      !isEmpty(data) ? data[0].thumbnail.extension : ""
                    }`}
                  />
                </div>
              </Col>
              <Col span={24}>
                <TitleDescription
                  title={`${!isEmpty(data) ? data[0].name : ""}`}
                  content={`${!isEmpty(data) ? data[0].description : ""}`}
                  loading={loading}
                />
              </Col>
            </Row>
            <Divider />
            {!isEmpty(data) &&
              data[0].urls.map((item, index) => {
                return (
                  <Row key={index} style={{ marginTop: `0em` }}>
                    <DescriptionItem
                      title={`${item.type}`}
                      content={`${item.url}`}
                      loading={loading}
                    />
                  </Row>
                );
              })}
            {isEmpty(data) &&
              Array(3)
                .fill()
                .map((item, index) => {
                  return (
                    <Row key={index} style={{ marginTop: `0em` }}>
                      <DescriptionItem
                        title={"Place holder"}
                        content={`Place Holder Content`}
                        loading={true}
                      />
                    </Row>
                  );
                })}
          </React.Fragment>
        </Drawer>
        
        {(isEmpty(data) && !loading && !isEmpty(id)) && <NotFoundPage title={"Requested character not found"} {...this.props}/>}
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: makeSelectCharacterList(),
  error: makeSelectError(),
  meta: makeSelectmeta(),
  loading: makeSelectLoading()
});

const mapDispatchToProps = dispatch => ({
  
});

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
)(StateDrawerContainer);
