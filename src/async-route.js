import React from "react";

const moduleDefaultExport = module => module.default || module;

export const asyncRoute = getComponent =>
  class AsyncRoute extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Component: null
      };
    }

    componentDidMount() {
      if (!this.state.Component) {
        getComponent()
        .then(moduleDefaultExport)
        .then(Component => this.setState({ Component }));
      }
    }

    render() {
      const { Component } = this.state;

      if (!Component) {
        console.log('nao tem component');
        return null;
      }

      return <Component {...this.props} />;
    }
  };
