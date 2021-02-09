import styled from "styled-components";

const PreloaderScreenContainer = styled.div`
  animation: appear 0s linear;
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
  grid-template-columns: ${({ count }) => " 1fr ".repeat(count)};
  grid-template-rows: ${({ count }) => " 1fr ".repeat(count)};
  width: ${({ size }) => size + "px"};
  height: ${({ size }) => size + "px"};
  overflow: hidden;
`;

const LogoBox = styled.div<LoaderProps>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-top: ${({ size, count, theme }) =>
    size / 1.95 / count + "px solid " + theme.neutral400};
  border-bottom: ${({ size, count, theme }) =>
    size / 1.95 / count + "px solid " + theme.neutral500};
  border-left: ${({ size, count, theme }) =>
    size / 1.95 / count + "px solid " + theme.neutral200};
  border-right: ${({ size, count, theme }) =>
    size / 1.95 / count + "px solid " + theme.neutral400};
  animation: border-animation ${({ speed }) => speed}s infinite;
  &:nth-child(odd) {
    transform: rotate(90deg);
  }
  @keyframes border-animation {
    0%,
    100% {
      border-top-color: ${({ theme }) => theme.neutral400};
      border-right-color: ${({ theme }) => theme.neutral100};
      border-bottom-color: ${({ theme }) => theme.neutral200};
      border-left-color: ${({ theme }) => theme.neutral300};
    }
    25% {
      border-top-color: ${({ theme }) => theme.neutral300};
      border-right-color: ${({ theme }) => theme.neutral400};
      border-bottom-color: ${({ theme }) => theme.neutral100};
      border-left-color: ${({ theme }) => theme.neutral200};
    }
    50% {
      border-top-color: ${({ theme }) => theme.neutral200};
      border-right-color: ${({ theme }) => theme.neutral300};
      border-bottom-color: ${({ theme }) => theme.neutral400};
      border-left-color: ${({ theme }) => theme.neutral100};
    }
    75% {
      border-top-color: ${({ theme }) => theme.neutral100};
      border-right-color: ${({ theme }) => theme.neutral200};
      border-bottom-color: ${({ theme }) => theme.neutral300};
      border-left-color: ${({ theme }) => theme.neutral400};
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
