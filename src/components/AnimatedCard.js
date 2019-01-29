import styled from 'styled-components';
import {Card } from 'antd';
import {slideInKeyFrame} from './KeyFrames/index';

export const AnimatedCard = styled(Card)`
    
    transform: translate3d(0, 100px, 0);
    animation: ${slideInKeyFrame} 0.8s ease forwards;
    animation-duration: 1.25s;
    
   
`