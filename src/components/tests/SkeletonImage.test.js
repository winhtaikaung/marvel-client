import React from 'react';
import { configure } from 'enzyme';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import Adapter from 'enzyme-adapter-react-16';


import SkeletonImage from '../SkeletonImage/SkeletonImage';
configure({ adapter: new Adapter() });
describe('<SkeletonImage />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SkeletonImage />, div);
        ReactDOM.unmountComponentAtNode(div);
    });


    
  it('should render an <SkeletonImage> tag', () => {
    
    const renderer = new ShallowRenderer();
    renderer.render(<SkeletonImage loading={true}/>);
    const result = renderer.getRenderOutput();
    expect(result.props.children[0].type.target).toEqual('img');
  });

  it('should render an <SkeletonImage> tag', () => {
    const imgUrl = `http://placeholdit.com`
    const renderer = new ShallowRenderer();
    renderer.render(<SkeletonImage loading={false}>
    <img src={imgUrl}/>
    </SkeletonImage>);
    const result = renderer.getRenderOutput();
    
    expect(result.props.children[1].type).toEqual('img');
    expect(result.props.children[1].props.src).toEqual(imgUrl);
  });

  

});