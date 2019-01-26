import React, { Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { createStructuredSelector } from "reselect";
import { Row, Col, Card, Input, Skeleton } from "antd";
import injectReducer from "../../utils/injectReducer";
import injectSaga from "../../utils/injectSaga";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { getSearchCharacter } from "./actions";
import reducer from "./reducer";
import saga from "./saga";
import {
  makeSelectCharacterList,
  makeSelectError,
  makeSelectmeta,
  makeSelectLoading
} from "./selector";
import Drawer from "../Drawer/index";

const Search = Input.Search;
export class HomeContainer extends React.Component {
  componentWillMount() {
    this.props.searchCharacter({ name: "a" });
  }

  render() {
    return (
      <Fragment>
        <Switch>
          <Route path={`${this.props.match.url}/:id`} component={Drawer} />
        </Switch>
        <Row gutter={24} style={{ marginTop: `calc(100vh/10)` }}>
          <Col span={4} push={4} />
          <Col span={19}>
            <Search
              placeholder="input search text"
              onSearch={value => this.props.searchCharacter({ name: value })}
              enterButton
            />
          </Col>
        </Row>
        {/* Movie List to be rendered Here */}
        <div style={{ padding: "30px", marginLeft: `2em`, marginRight: `2em` }}>
          <Row gutter={24}>
            {this.props.data.map((item, index) => {
              return (
                <Col key={index} xs={24} sm={12} md={8} lg={8}>
                  <Card
                    onClick={() => {
                      this.props.history.push(
                        `${this.props.match.url}/${item.id}`
                      );
                    }}
                    hoverable={true}
                    bordered={true}
                    cover={
                      <img
                        alt="example"
                        style={{ minHeight: `443px`, maxHeight: `800px` }}
                        src={`${item.thumbnail.path}.${
                          item.thumbnail.extension
                        }`}
                      />
                    }
                    style={{
                      marginTop: `4em`,
                      WebkitBoxShadow: "-2px 10px 44px -2px rgba(0,0,0,0.13)",
                      MozBoxShadow: "-2px 10px 44px -2px rgba(0,0,0,0.13)",
                      boxShadow: "-2px 10px 44px -2px rgba(0,0,0,0.13)",
                      transition:`translate(0px, 0px)`,
                      opacity:`1`
                    }}
                  >
                    <Skeleton loading={this.props.loading} active>
                      <div>
                        <h2>{item.name}</h2>
                        <p>{item.descriptions}</p>
                      </div>
                    </Skeleton>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
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

const mapDispatchToProps = dispatch => {
  return {
    searchCharacter: payload => dispatch(getSearchCharacter(payload))
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "home", reducer });
const withSaga = injectSaga({ key: "home", saga });

export default withRouter(
  compose(
    withReducer,
    withSaga,
    withConnect
  )(HomeContainer)
);
