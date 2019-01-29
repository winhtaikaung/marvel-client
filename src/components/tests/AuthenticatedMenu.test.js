import React from 'react';
import { configure } from 'enzyme';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import Adapter from 'enzyme-adapter-react-16';


import AuthenticatedMenu from '../AuthenticatedMenu';
const currentUser=true
describe('<SkeletonImgeGrid />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AuthenticatedMenu currentUser={true}/>, div);
        ReactDOM.unmountComponentAtNode(div);

        ReactDOM.render(<AuthenticatedMenu currentUser={false}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });


    
  it('should render an <AuthenticatedMenu> only next Button', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<AuthenticatedMenu currentUser={true}/>);
    const result = renderer.getRenderOutput();
    // console.log(result.props.children[0].props.children[0].props.type,'logout')
    // console.log(result.props.children[0].props.children[1])
    expect(result.props.children[0].props.children[1]).toEqual('Logout');
    expect(result.props.children[0].props.children[0].props.type).toEqual('logout');
  });

  it('should render an <AuthenticatedMenu> only next Button', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<AuthenticatedMenu currentUser={false}/>);
    const result = renderer.getRenderOutput();
    // console.log(result.props.children[1].props.children[0].props.type,'login')
    // console.log(result.props.children[1].props.children[1],'Login')

    // console.log(result.props.children[2].props.children[0].props.type,'form')
    // console.log(result.props.children[2].props.children[1],'Register')
    // console.log(result.props.children[0].props.children[1])
    expect(result.props.children[1].props.children[0].props.type).toEqual('login');
    expect(result.props.children[1].props.children[1]).toEqual('Login');
    
    expect(result.props.children[2].props.children[0].props.type).toEqual('form');
    expect(result.props.children[2].props.children[1]).toEqual('Register');
  });


  // it('should render an <PagingComponent> show both Next and Prev', () => {
  //   const updatedOffsetMeta={
  //     offset:60,
  //     limit:18,
  //     total:100,
  //   }
  //   const renderer = new ShallowRenderer();
  //   renderer.render(<PagingComponent meta={updatedOffsetMeta}/>);
  //   const result = renderer.getRenderOutput();
  //   // console.log(result.props.children[0].props.children[1])
    
  //   expect(result.props.children[0].props.children[1]).toEqual('Prev');
  //   expect(result.props.children[1].props.children[0]).toEqual('Next');
  // });

  // it('should render an <PagingComponent> show  Prev', () => {
  //   const updatedOffsetMeta={
  //     offset:90,
  //     limit:18,
  //     total:100,
  //   }
  //   const renderer = new ShallowRenderer();
  //   renderer.render(<PagingComponent meta={updatedOffsetMeta}/>);
  //   const result = renderer.getRenderOutput();
  //   console.log(result.props.children[0].props.children[1])
  //   expect(result.props.children[0].props.children[1]).toEqual('Prev');
  // });

  

});