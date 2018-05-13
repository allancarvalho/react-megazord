import React from "react";
import { BrowserRouter } from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";

export const provider = routes => {
  return class Router extends React.Component {
    render() {
      return <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;
    }
  };
};
