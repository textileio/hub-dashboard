import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% {opacity: 0}
  100% {opacity: 1}
`;

export const diagonalScroll = keyframes`
  0%, 100% {left: -30%; top: -30%;}
  50% {left: 0; top: 0}
`;
