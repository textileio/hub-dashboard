import { useContext } from "react";
import { HashRouter as Router } from "react-router-dom";
import styled from "styled-components";
import Loader from "../components/Loader";
import Context from "../store/Context";
import Header from "./Header";
import SideMenu from "./SideMenu";
import Routes from "./Routes";

const LayoutContainer = styled.div`
  display: flex;
`;

const ActiveSection = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 980px;
  padding: 0 40px;
  margin: 0 auto;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 160px;
`;

const LoadingScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.neutral100};
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Layout = () => {
  const [state] = useContext(Context);
  return (
    <LayoutContainer>
      <Router>
        <SideMenu />
        <Content>
          <Header />
          <ActiveSection>
            {state.loading ? (
              <LoadingScreen>
                <div>
                  <Loader count={2} size={80} speed={6} />
                  <p>Please wait</p>
                </div>
              </LoadingScreen>
            ) : null}
            <Routes />
          </ActiveSection>
        </Content>
      </Router>
    </LayoutContainer>
  );
};

export default Layout;
