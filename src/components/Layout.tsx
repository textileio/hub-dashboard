import Header from "./Header";
import SideMenu from "./SideMenu";
import styled from "styled-components";
import OrganizationsPanel from "../pages/Organizations/OrganizationsPanel";
import EditOrganization from "../pages/Organizations/EditOrganization";
import EditApiKey from "../pages/ApiKeys/EditApiKey";
import ApiKeysPanel from "../pages/ApiKeys/ApiKeysPanel";
import { BrowserRouter as Router } from "react-router-dom";

import { Switch, Route } from "react-router-dom";

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
              <Route path="/organizations" component={OrganizationsPanel} />
              <Route path="/editorganization" component={EditOrganization} />
              <Route path="/keys" component={ApiKeysPanel} />
              <Route path="/editapikey" component={EditApiKey} />
            </Switch>
          </ActiveSection>
        </Content>
      </Router>
    </LayoutContainer>
  );
};

export default Layout;
