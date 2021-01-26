import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CookiesProvider } from "react-cookie";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { HashRouter } from "react-router-dom";
import { GlobalStyles } from "./utils/";
import Provider from "./store/Provider";
import { cookies } from "./store/Reducer";

ReactDOM.render(
  <StrictMode>
    <CookiesProvider cookies={cookies}>
      <Provider>
        <HashRouter>
          <App />
          <GlobalStyles />
        </HashRouter>
      </Provider>
    </CookiesProvider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
