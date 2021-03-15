import { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFoundPage from "./pages/404";
import ApiKeysPanel from "./pages/ApiKeys/ApiKeysPanel";
import EditApiKey from "./pages/ApiKeys/EditApiKey";
import BucketsPanel from "./pages/Buckets/BucketsListPanel";
import BucketView from "./pages/Buckets/BucketEditPage";
import BillingPanel from "./pages/Billing/BillingPanel";
import {
  AddOrganization,
  EditOrganization,
} from "./pages/Organizations/EditOrganization";
import OverviewPage from "./pages/Overview/OverviewPage";
import EditThread from "./pages/Threads/EditThread";
import ThreadsPanel from "./pages/Threads/ThreadsPanel";
import Context from "./store/Context";

const Routes = () => {
  const [state] = useContext(Context);

  return (
    <Switch>
      {state.user.sessionInfo?.username ? (
        <Route exact path="/">
          <Redirect to={"/" + state.user.sessionInfo?.username} />
        </Route>
      ) : null}

      <Route exact path="/notfound" component={NotFoundPage} />
      <Route exact path="/notfound/*" component={NotFoundPage} />
      <Route exact path="/:currentOrganization/" component={OverviewPage} />
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
      <Route exact path="/:currentOrganization/keys" component={ApiKeysPanel} />
      <Route
        exact
        path="/:currentOrganization/editapikey"
        component={EditApiKey}
      />
      <Route
        exact
        path="/:currentOrganization/buckets"
        component={BucketsPanel}
      />
      <Route
        exact
        path="/:currentOrganization/bucketview"
        component={BucketView}
      />
      <Route
        exact
        path="/:currentOrganization/threads"
        component={ThreadsPanel}
      />
      <Route
        exact
        path="/:currentOrganization/threads/:threadId"
        component={EditThread}
      />
      <Route
        exact
        path="/:currentOrganization/billing"
        component={BillingPanel}
      />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
