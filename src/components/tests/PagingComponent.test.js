import React from 'react';
import { configure } from 'enzyme';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import Adapter from 'enzyme-adapter-react-16';

import PagingComponent from '../PagingComponent';
const meta = {
  offset: 0,
  limit: 18,
  total: 100
};
describe('<SkeletonImgeGrid />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PagingComponent meta={meta} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render an <PagingComponent> only next Button', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<PagingComponent meta={meta} />);
    const result = renderer.getRenderOutput();

    expect(result.props.children[1].props.children[0]).toEqual('Next');
  });

  it('should render an <PagingComponent> show both Next and Prev', () => {
    const updatedOffsetMeta = {
      offset: 60,
      limit: 18,
      total: 100
    };
    const renderer = new ShallowRenderer();
    renderer.render(<PagingComponent meta={updatedOffsetMeta} />);
    const result = renderer.getRenderOutput();

    expect(result.props.children[0].props.children[1]).toEqual('Prev');
    expect(result.props.children[1].props.children[0]).toEqual('Next');
  });

  it('should render an <PagingComponent> show  Prev', () => {
    const updatedOffsetMeta = {
      offset: 90,
      limit: 18,
      total: 100
    };
    const renderer = new ShallowRenderer();
    renderer.render(<PagingComponent meta={updatedOffsetMeta} />);
    const result = renderer.getRenderOutput();
    
    expect(result.props.children[0].props.children[1]).toEqual('Prev');
  });

 
});
