import styled from "styled-components";
import { PrimaryButton } from "../components/Buttons";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { diagonalScroll } from "../utils";

const NotFoundPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 150px;
  h1 {
    font-size: 6rem;
  }
  h2 {
    font-size: 2rem;
  }
  h1,
  h2 {
    margin: 10px;
  }
`;

const BackgroundContainer = styled.div`
  z-index: -1;
  position: fixed;
  opacity: 0.2;
  align-items: center;
  animation: ${diagonalScroll} 10s infinite;
`;

const HelpList = styled.ul`
  display: flex;
  li {
    margin: 0 15px;
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundPageContainer>
      <BackgroundContainer>
        <Loader size={3500} count={10} speed={6} />
      </BackgroundContainer>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Need help? </p>
      <HelpList>
        <li>
          <a href="https://blog.textile.io/" target="_blank" rel="noreferrer">
            Blog
          </a>
        </li>
        <li>
          <a href="https://slack.textile.io/" target="_blank" rel="noreferrer">
            Support
          </a>
        </li>
        <li>
          <a href="https://docs.textile.io/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </li>
      </HelpList>
      <Link to="/">
        <PrimaryButton>Dashboard</PrimaryButton>
      </Link>
    </NotFoundPageContainer>
  );
};

export default NotFoundPage;
