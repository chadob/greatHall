
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import reducer from "./reducers";
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router'; // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById("root"));
