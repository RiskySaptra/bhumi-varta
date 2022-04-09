import React from "react";
import ReactDOM from "react-dom";
import stores from "./reducers";
import { Provider } from "react-redux";

//components
import App from "./App";
import "./index.css";

ReactDOM.render(
  <Provider store={stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);
