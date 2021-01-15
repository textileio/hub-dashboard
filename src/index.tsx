import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CookiesProvider } from "react-cookie";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./utils/";
import Provider from "./store/Provider";
import { cookies } from "./store/Reducer";

ReactDOM.render(
  <StrictMode>
    <CookiesProvider cookies={cookies}>
      <Provider>
        <BrowserRouter>
          <App />
          <GlobalStyles />
        </BrowserRouter>
      </Provider>
    </CookiesProvider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
