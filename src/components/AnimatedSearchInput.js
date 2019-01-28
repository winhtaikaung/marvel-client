import styled from "styled-components";
import {Input } from 'antd';
import {slideInKeyFrame} from './KeyFrames/index';


export const AnimatedSearch = styled(Input.Search)`
    .ant-input{
        
        border-bottom-left-radius: 50px !important;
        border-top-left-radius: 50px !important;
        
    }
    .ant-btn{
        
        border-bottom-right-radius: 50px !important;
        border-top-right-radius: 50px !important;
    }
   
    
    
    &:hover{
    transform: translate3d(0, 1px, 0);
    animation: ${slideInKeyFrame} 0.8s ease forwards;
    animation-duration: 1.25s;
    }
    
   
`