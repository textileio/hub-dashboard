import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% {opacity: 0}
  100% {opacity: 1}
`;

export const diagonalScroll = keyframes`
  0%, 100% {left: -30%; top: -30%;}
  50% {left: 0; top: 0}
`;

export const toastFade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(8px);
  }
  5% {
    opacity: 1;
    transform: translateY(0px);
  }
  95% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(-4px);
  }
`;
