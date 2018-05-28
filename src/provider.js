import React from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import configureStore from "./store";
import { Router } from "react-router";

export const provider = (routes, reducers) => {
  const store = configureStore([], reducers, {});

  return class Router extends React.Component {
    render() {
      return (
        <Provider store={store}>
            <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
        </Provider>
      );
    }
  };
};
