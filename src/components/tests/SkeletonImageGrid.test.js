import React from 'react';
import { configure } from 'enzyme';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import Adapter from 'enzyme-adapter-react-16';


import SkeletonImgeGrid from '../SkeletonImageGrid';

describe('<SkeletonImgeGrid />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SkeletonImgeGrid />, div);
        ReactDOM.unmountComponentAtNode(div);
    });


    
  it('should render an <SkeletonImgeGrid> tag', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<SkeletonImgeGrid />);
    const result = renderer.getRenderOutput();
    expect(result.type).toEqual('div');
  });

  it('should Show skeleton images ', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<SkeletonImgeGrid loading={true}/>);
    const result = renderer.getRenderOutput();
    
    expect(Array.isArray(result.props.children[0].props.children)).toEqual(true);
  });

  it('should Show children  ', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<SkeletonImgeGrid loading={false}>`
    <p>Hello</p>
    </SkeletonImgeGrid>);
    const result = renderer.getRenderOutput();
    
    expect(result.props.children[1][1].type).toEqual('p');
  });

});