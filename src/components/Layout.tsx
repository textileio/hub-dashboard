import { useContext } from "react";
import Context from "../store/Context";
import Header from "./Header";
import SideMenu from "./SideMenu";
import styled from "styled-components";
import OverviewPage from "../pages/Overview/OverviewPage";
import {
  EditOrganization,
  AddOrganization,
} from "../pages/Organizations/EditOrganization";
import EditApiKey from "../pages/ApiKeys/EditApiKey";
import ApiKeysPanel from "../pages/ApiKeys/ApiKeysPanel";
import NotFoundPage from "../pages/404";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams,
} from "react-router-dom";
import { OrgInterface } from "../components/Utils";

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
  const [state] = useContext(Context);
  const { currentOrganization } = useParams<OrgInterface>();
  console.log(currentOrganization);

  return (
    <LayoutContainer>
      <Router>
        <SideMenu />
        <Content>
          <Header />
          <ActiveSection>
            <Switch>
              {state.user.sessionInfo?.username ? (
                <Route exact path="/">
                  <Redirect to={"/" + state.user.sessionInfo?.username} />
                </Route>
              ) : null}

              <Route exact path="/notfound" component={NotFoundPage} />
              <Route exact path="/notfound/*" component={NotFoundPage} />
              <Route
                exact
                path="/:currentOrganization/"
                component={OverviewPage}
              />
              <Route
                exact
                path="/:currentOrganization/editorganization"
                component={EditOrganization}
              />
              <Route
                exact
                path="/:currentOrganization/addorganization"
                component={AddOrganization}
              />
              <Route
                path="/:currentOrganization/keys"
                component={ApiKeysPanel}
              />
              <Route
                path="/:currentOrganization/editapikey"
                component={EditApiKey}
              />
              {/* <Route component={NotFoundPage} /> */}
            </Switch>
          </ActiveSection>
        </Content>
      </Router>
    </LayoutContainer>
  );
};

export default Layout;
