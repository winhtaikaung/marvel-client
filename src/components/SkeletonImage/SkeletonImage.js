import React from 'react';
import styled from "styled-components";
import {shimmerKeyFrame} from "../KeyFrames";

export const PlaceHolderImage = styled.img `
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${shimmerKeyFrame};
  animation-timing-function: linear;
  background: darkgray;
  border: 0;
  background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 100%;
  height: ${props => props.height};
  width: ${props => props.width? props.width:'100%'};
  position: relative;
`;

const SkeletonImage = ({
  children,
  loading,
  ...rest
}) => {
  return (<React.Fragment>
    {
      loading &&< PlaceHolderImage {
        ...rest
      } />
    }
    {!loading && children}
  </React.Fragment>)
}

export default SkeletonImage;
