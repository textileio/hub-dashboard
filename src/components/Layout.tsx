import Header from "./Header";
import SideMenu from "./SideMenu";
import styled from "styled-components";
import OverviewPage from "../pages/Overview/OverviewPage";
import EditOrganization from "../pages/Organizations/EditOrganization";
import EditApiKey from "../pages/ApiKeys/EditApiKey";
import ApiKeysPanel from "../pages/ApiKeys/ApiKeysPanel";
import NotFoundPage from "../pages/404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const LayoutContainer = styled.div`
  display: flex;
`;
const ActiveSection = styled.div`
  display: flex;
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  height: 100%;
  box-sizing: border-box;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <Router>
        <SideMenu />
        <Content>
          <Header />
          <ActiveSection>
            <Switch>
              <Route path="/notfound" component={NotFoundPage} />
              <Route
                exact
                path="/:currentOrganization/"
                component={OverviewPage}
              />
              <Route
                path="/:currentOrganization/editorganization"
                component={EditOrganization}
              />
              <Route
                path="/:currentOrganization/keys"
                component={ApiKeysPanel}
              />
              <Route
                path="/:currentOrganization/editapikey"
                component={EditApiKey}
              />
            </Switch>
          </ActiveSection>
        </Content>
      </Router>
    </LayoutContainer>
  );
};

export default Layout;
