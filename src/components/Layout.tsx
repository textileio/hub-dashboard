import Header from "./Header";
import SideMenu from "./SideMenu";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
`;
const ActiveSection = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <SideMenu />
      <Content>
        <Header />
        <ActiveSection />
      </Content>
    </LayoutContainer>
  );
};

export default Layout;
