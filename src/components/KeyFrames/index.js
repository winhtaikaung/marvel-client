import  { keyframes } from "styled-components";

export const  shimmerKeyFrame = keyframes`
   0%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0 50%;
    }
`;

export const slideInKeyFrame = keyframes`

    to {
      transform: translate3d(0, 0, 0);
    }
  `;
