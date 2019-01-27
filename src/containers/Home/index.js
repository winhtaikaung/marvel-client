import React, { Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { createStructuredSelector } from "reselect";
import { Row, Col, Card, Input, Skeleton, Layout, Button, Icon } from "antd";
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
import PagingComponent from "../../components/PagingComponent";
const { Header, Footer, Content } = Layout;
const Search = Input.Search;
export class HomeContainer extends React.Component {

  state={
    searchKey:"a"
  }
  componentDidMount() {
    this.props.searchCharacter({ nameStartsWith: "a",offset:0,limit:18 });
  }

  render() {
    return (
      <Fragment>
        <Switch>
          <Route path={`${this.props.match.url}/:id`} component={Drawer} />
        </Switch>
        <Layout>
          <header style={{ padding: `calc(100vh/40)` }}>
            <Row gutter={24}>
              <Col span={4} push={4} />
              <Col span={19}>
                <Search
                  placeholder="Please type something to start searching"
                  size="large"
                  onChange={(e)=>{
                    
                    this.setState({searchKey:e.target.value});
                  }}
                  onSearch={value =>{
                    this.setState({searchKey:value});
                    this.props.searchCharacter({ nameStartsWith: value,offset:0,limit:18 })
                  }}
                  style={{ borderRadius: `50px` }}
                  enterButton
                />
              </Col>
            </Row>
          </header>
          <Content style={{ height: `70vh`, overflow: `scroll` }}>
            <Skeleton
              loading={this.props.loading}
              paragraph={{ rows: 20 }}
              active
            >
              <div
                style={{
                  padding: "15px",
                  marginLeft: `2em`,
                  marginRight: `2em`
                }}
              >
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
                              // style={{ height: `300px`, maxHeight: `800px` }}
                              height="400"
                              src={`${item.thumbnail.path}.${
                                item.thumbnail.extension
                              }`}
                            />
                          }
                          style={{
                            marginTop: `2em`,
                            WebkitBoxShadow:
                              "-2px 10px 44px -2px rgba(0,0,0,0.13)",
                            MozBoxShadow:
                              "-2px 10px 44px -2px rgba(0,0,0,0.13)",
                            boxShadow: "-2px 10px 44px -2px rgba(0,0,0,0.13)",
                            transition: `translate(0px, 0px)`,
                            opacity: `1`
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
            </Skeleton>
          </Content>
          <Footer>
            <PagingComponent
              meta={this.props.meta}
              onPrevClick={(pagenum) => {
                this.props.searchCharacter({ nameStartsWith: this.state.searchKey,offset:pagenum,limit:18 })
              }}
              onNextClick={(pagenum) => {
                this.props.searchCharacter({ nameStartsWith: this.state.searchKey,offset:pagenum,limit:18 })
              }}
            />
          </Footer>
        </Layout>

        {/* Movie List to be rendered Here */}
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
