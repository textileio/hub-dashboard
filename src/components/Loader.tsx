import styled from "styled-components";
import { defaultTheme } from "../utils/index";

const { neutral200, neutral400, neutral500 } = defaultTheme;

const PreloaderScreenContainer = styled.div`
  animation: appear 0s linear;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .loading {
    margin: 20px;
    font-size: 20px;
  }
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const PreloaderLogo = styled.div<LoaderProps>`
  display: grid;
  grid-template-columns: ${(props) => " 1fr ".repeat(props.count)};
  grid-template-rows: ${(props) => " 1fr ".repeat(props.count)};
  width: ${(props) => props.size + "px"};
  height: ${(props) => props.size + "px"};
  overflow: hidden;
`;

const LogoBox = styled.div<LoaderProps>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-top: ${(props) =>
    props.size / 1.95 / props.count + "px solid " + neutral400};
  border-bottom: ${(props) =>
    props.size / 1.95 / props.count + "px solid " + neutral500};
  border-left: ${(props) =>
    props.size / 1.95 / props.count + "px solid " + neutral200};
  border-right: ${(props) =>
    props.size / 1.95 / props.count + "px solid " + neutral400};
  animation: border-animation ${(props) => props.speed}s infinite;
  &:nth-child(odd) {
    transform: rotate(90deg);
  }
  @keyframes border-animation {
    0% {
      border-top-color: rgba(0, 0, 0, 0.4);
      border-right-color: rgba(0, 0, 0, 0.1);
      border-bottom-color: rgba(0, 0, 0, 0.2);
      border-left-color: rgba(0, 0, 0, 0.3);
    }
    25% {
      border-top-color: rgba(0, 0, 0, 0.3);
      border-right-color: rgba(0, 0, 0, 0.4);
      border-bottom-color: rgba(0, 0, 0, 0.1);
      border-left-color: rgba(0, 0, 0, 0.2);
    }
    50% {
      border-top-color: rgba(0, 0, 0, 0.2);
      border-right-color: rgba(0, 0, 0, 0.3);
      border-bottom-color: rgba(0, 0, 0, 0.4);
      border-left-color: rgba(0, 0, 0, 0.1);
    }
    75% {
      border-top-color: rgba(0, 0, 0, 0.1);
      border-right-color: rgba(0, 0, 0, 0.2);
      border-bottom-color: rgba(0, 0, 0, 0.3);
      border-left-color: rgba(0, 0, 0, 0.4);
    }
    100% {
      border-top-color: rgba(0, 0, 0, 0.4);
      border-right-color: rgba(0, 0, 0, 0.1);
      border-bottom-color: rgba(0, 0, 0, 0.2);
      border-left-color: rgba(0, 0, 0, 0.3);
    }
  }
`;

interface LoaderProps {
  count: number;
  size: number;
  speed: number;
}

const Loader = ({ count, size, speed }: LoaderProps) => {
  return (
    <PreloaderScreenContainer>
      <PreloaderLogo count={count} size={size} speed={speed}>
        {[...Array(count * count)].map((e, i) => (
          <LogoBox key={i} count={count} size={size} speed={speed} />
        ))}
      </PreloaderLogo>
    </PreloaderScreenContainer>
  );
};

export default Loader;