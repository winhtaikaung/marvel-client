import React, { Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { createStructuredSelector } from "reselect";
import { Row, Col,  Skeleton, Layout, Popconfirm } from "antd";
import injectReducer from "../../utils/injectReducer";
import injectSaga from "../../utils/injectSaga";
import { withRouter, Switch, Route } from "react-router-dom";
import { getSearchCharacter } from "./actions";
import reducer from "./reducer";
import saga from "./saga";
import isEmpty from 'lodash/isEmpty'
import {
  makeSelectCharacterList,
  makeSelectError,
  makeSelectmeta,
  makeSelectLoading
} from "./selector";
import Drawer from "../Drawer/index";
import StateDrawer from "../Drawer/StateDrawer";
import PagingComponent from "../../components/PagingComponent";
import {getCharacterDetail} from '../Drawer/actions';
import SkeletonImgeGrid from '../../components/SkeletonImageGrid'
import SkeletonImage from '../../components/SkeletonImage/SkeletonImage'
import { AnimatedCard } from "../../components/AnimatedCard";
import {AnimatedSearch} from '../../components/AnimatedSearchInput';


const {  Footer, Content } = Layout;

export class HomeContainer extends React.Component {

  state={
    searchKey:"a",
    isDrawerOpen:false,
    id:"",
    initialLogin:(localStorage.getItem("isFirstTime")===null)?true:localStorage.getItem("isFirstTime")

  }
  componentDidMount() {
    this.props.searchCharacter({ nameStartsWith: "a",offset:0,limit:18 });
  }

  render() {
    console.log(this.props)
    return (
      <Fragment>
        <Switch>
          <Route path={`${this.props.match.url}/:id`} component={Drawer} />
        </Switch>
        <StateDrawer isOpen={this.state.isDrawerOpen} onClose={()=>this.setState({isDrawerOpen:!this.state.isDrawerOpen,id:""})} id={this.state.id}/>
        <Layout>
          <header style={{ padding: `calc(100vh/40)` }}>
            <Row gutter={24}>
              <Col span={4} push={4} />
              <Col span={19}>
              {/* Sub Module this part  */}
              <Popconfirm visible={this.state.initialLogin==="false" || !(this.state.initialLogin)?false:true} placement="bottom" title={"Please type something below to start searching"} onConfirm={()=>{
                this.setState({initialLogin:false})
                localStorage.setItem("isFirstTime",false)
              }} okText="Ok" onCancel={()=>{
                this.setState({initialLogin:false})
                localStorage.setItem("isFirstTime",false)
              }}cancelText="Got it!"><AnimatedSearch
                  placeholder="Please type something to start searching"
                  size="large"
                  onChange={(e)=>{

                    this.setState({searchKey:e.target.value});
                  }}
                  onSearch={value =>{
                    this.setState({searchKey:value});
                    this.props.searchCharacter({ nameStartsWith: value,offset:0,limit:18 })
                  }}
                  enterButton
                /></Popconfirm>
              </Col>
            </Row>
          </header>
          <Content style={{ height: `70vh`, overflow: `scroll` }}>
            <SkeletonImgeGrid
              loading={this.props.loading}
            >

                <Row gutter={24}>
                  {this.props.data.map((item, index) => {
                    return (
                      <Col key={index} xs={24} sm={12} md={8} lg={8}>
                        <AnimatedCard
                          onClick={() => {

                           this.setState({isDrawerOpen:true,id:item.id},()=>{
                             this.props.fetchCharacterDetail({id:item.id})
                           })
                          }}
                          hoverable={true}
                          bordered={true}
                          cover={
                            <SkeletonImage loading={this.props.loading} height="400">
                            <img
                              alt="example"
                              // style={{ height: `300px`, maxHeight: `800px` }}
                              style={{"WebkitFilter":"blur(10px)","filter":"blur(10px)"}}
                              onLoad={(e)=>{e.target.style.filter=""}}
                              height="400"
                              src={`${item.thumbnail.path}.${
                                item.thumbnail.extension
                              }?${new Date().getTime()}`}
                            />
                          </SkeletonImage>
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
                        </AnimatedCard>
                      </Col>
                    );
                  })}
                  {(isEmpty(this.props.data) && !(this.props.loading))&&
                  <div style={{textAlign:`center`,marginTop:`calc(100vh/3)`}}><h1>¯\_(ツ)_/¯</h1>
                  <h1>Items Not Found!</h1></div>
                  }
                </Row>

            </SkeletonImgeGrid>
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
    searchCharacter: payload => dispatch(getSearchCharacter(payload)),
    fetchCharacterDetail: payload => dispatch(getCharacterDetail(payload)),
    
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
