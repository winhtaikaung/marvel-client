import React, { Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { Row, Col, Card } from "antd";
import injectReducer from "../../utils/injectReducer";
import injectSaga from "../../utils/injectSaga";
import { Input } from "antd";
import { getDummyData } from "./actions";
import reducer from "./reducer";
import saga from "./saga";

const Search = Input.Search;
export class DummyContainer extends React.Component {
  componentDidMount() {
    this.props.fetchDummyAPI();
  }

  render() {
    
    return (
      <Fragment>
        <Row gutter={24} style={{ marginTop: `calc(100vh/10)` }}>
          <Col span={4} push={4} />
          <Col span={19}>
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              enterButton
            />
          </Col>
        </Row>
        {/* Movie List to be rendered Here */}
        <div style={{ padding: "30px", marginLeft: `2em`, marginRight: `2em` }}>
          <Row gutter={24}>
            <Col xs={24} sm={12} md={8} lg={8}  >
              <Card
                
                bordered={false}
                cover={<img alt="example" src="http://i.annihil.us/u/prod/marvel/i/mg/a/10/528d369de3e4f.jpg" />}
                style={{
                  marginTop: `4em`,
                  WebkitBoxShadow: "-2px 10px 44px -2px rgba(0,0,0,0.13)",
                  MozBoxShadow: "-2px 10px 44px -2px rgba(0,0,0,0.13)",
                  boxShadow: "-2px 10px 44px -2px rgba(0,0,0,0.13)"
                }}
              >
                Card content
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} >
              <Card
                
                bordered={false}
                cover={<img alt="example" src="http://i.annihil.us/u/prod/marvel/i/mg/e/03/5317713c9e746.jpg"/>}
                style={{
                  marginTop: `4em`,
                  WebkitBoxShadow: "-2px 10px 44px -2px rgba(0,0,0,0.13)",
                  MozBoxShadow: "-2px 10px 44px -2px rgba(0,0,0,0.13)",
                  boxShadow: "-2px 10px 44px -2px rgba(0,0,0,0.13)"
                }}
              >
                Card content
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} >
              <Card
                
                bordered={false}
                cover={<img alt="example" src="http://i.annihil.us/u/prod/marvel/i/mg/9/c0/53176aa9df48d.jpg"/>}
                style={{
                  marginTop: `4em`,
                  WebkitBoxShadow: "-2px 10px 44px -2px rgba(0,0,0,0.13)",
                  MozBoxShadow: "-2px 10px 44px -2px rgba(0,0,0,0.13)",
                  boxShadow: "-2px 10px 44px -2px rgba(0,0,0,0.13)"
                }}
              >
                Card content
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8}>
              <Card
                
                bordered={false}
                cover={<img alt="example" src="http://i.annihil.us/u/prod/marvel/i/mg/e/03/5317713c9e746.jpg"/>}
                style={{
                  marginTop: `4em`,
                  WebkitBoxShadow: "-2px 10px 44px -2px rgba(0,0,0,0.13)",
                  MozBoxShadow: "-2px 10px 44px -2px rgba(0,0,0,0.13)",
                  boxShadow: "-2px 10px 44px -2px rgba(0,0,0,0.13)"
                }}
              >
                Card content
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8}>
              <Card
                
                bordered={false}
                cover={<img alt="example" src="http://i.annihil.us/u/prod/marvel/i/mg/e/03/5317713c9e746.jpg"/>}
                style={{
                  marginTop: `4em`,
                  WebkitBoxShadow: "-2px 10px 44px -2px rgba(0,0,0,0.13)",
                  MozBoxShadow: "-2px 10px 44px -2px rgba(0,0,0,0.13)",
                  boxShadow: "-2px 10px 44px -2px rgba(0,0,0,0.13)"
                }}
              >
                Card content
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8}>
              <Card
                
                bordered={false}
                cover={<img alt="example" src="http://i.annihil.us/u/prod/marvel/i/mg/e/03/5317713c9e746.jpg"/>}
                style={{
                  marginTop: `4em`,
                  WebkitBoxShadow: "-2px 10px 44px -2px rgba(0,0,0,0.13)",
                  MozBoxShadow: "-2px 10px 44px -2px rgba(0,0,0,0.13)",
                  boxShadow: "-2px 10px 44px -2px rgba(0,0,0,0.13)"
                }}
              >
                Card content
              </Card>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => {
  return {
    fetchDummyAPI: () => dispatch(getDummyData())
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "dummy", reducer });
const withSaga = injectSaga({ key: "dummy", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(DummyContainer);
