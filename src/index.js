import React from "react";
import ReactDOM from "react-dom";
import stores from "./reducers";
import { Provider } from "react-redux";

//components
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./components/ThemeContext";

ReactDOM.render(
  <ThemeProvider>
    <Provider store={stores}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
