import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store/store";
import Router from "./routers/Router";
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/reset.css"
import 'raf/polyfill';

const App = () => {

  return (
    <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router/>
    </ConnectedRouter>
  </Provider>
  )
};
 
export default (App);