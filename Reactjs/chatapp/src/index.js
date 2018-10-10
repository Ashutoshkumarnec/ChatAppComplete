import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./Main";
import registerServiceWorker from "./registerServiceWorker";
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
// ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
