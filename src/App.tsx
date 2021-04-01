import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Switch, Route } from "react-router-dom";
import AccessPage from "./pages/Access/AccessPage";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./components/PrivateRoute";
import Banner from "./components/AlphaBanner";
import { useCookies } from "react-cookie";

import { blueTheme, GlobalStyles } from "./utils";
import { defaultTheme, darkTheme } from "./utils";

function App() {
  const [theme] = useState("");
  const [cookies] = useCookies();

  return (
    <div>
      <ThemeProvider
        theme={
          theme === "dark"
            ? darkTheme
            : theme === "blue"
            ? blueTheme
            : defaultTheme
        }
      >
        <Banner />
        <GlobalStyles />
        <Switch>
          <Route exact path="/access" component={AccessPage} />
          <ProtectedRoute
            path="/"
            component={DashboardPage}
            validator={() => cookies.sessionInfo != null}
            to={{ pathname: "/access" }}
          />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
