import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

export default (middlewares = [], reducers, state = {}) => {
  const middleware = [
    thunkMiddleware,
  ];

  middlewares = compose(applyMiddleware(...middlewares), devTools);

  return createStore(reducers, state, middlewares)
}