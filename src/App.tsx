import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Switch, Route } from "react-router-dom";
import AccessPage from "./pages/Access/AccessPage";
import DashboardPage from "./pages/DashboardPage";
import PrivateRoute from "./components/PrivateRoute";

import { blueTheme, GlobalStyles } from "./utils";
import { defaultTheme, darkTheme } from "./utils";

function App() {
  const [theme] = useState("");

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
        <GlobalStyles />
        <Switch>
          <Route exact path="/access" component={AccessPage} />
          <PrivateRoute
            path="/"
            component={DashboardPage}
            to={{ pathname: "/access" }}
          />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
