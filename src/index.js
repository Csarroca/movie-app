import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle/GlobalStyle";
import Theme from "./styles/Theme/Theme";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Theme>
          <GlobalStyle />
          <App />
        </Theme>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
