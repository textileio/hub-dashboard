import { useState } from "react";
import { ThemeProvider } from "styled-components";

import AccessPage from "./pages/Access/AccessPage";
// import DashboardPage from "./pages/DashboardPage";

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
        {/* <DashboardPage /> */}
        <AccessPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
