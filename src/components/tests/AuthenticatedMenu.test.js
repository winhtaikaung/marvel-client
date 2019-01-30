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
    
    
    expect(result.props.children[0].props.children[1]).toEqual('Logout');
    expect(result.props.children[0].props.children[0].props.type).toEqual('logout');
  });

  it('should render an <AuthenticatedMenu> only next Button', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<AuthenticatedMenu currentUser={false}/>);
    const result = renderer.getRenderOutput();
   
    expect(result.props.children[1].props.children[0].props.type).toEqual('login');
    expect(result.props.children[1].props.children[1]).toEqual('Login');
    
    expect(result.props.children[2].props.children[0].props.type).toEqual('form');
    expect(result.props.children[2].props.children[1]).toEqual('Register');
  });

 

});