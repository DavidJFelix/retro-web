import { applyMiddleware, compose, createStore } from 'redux';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import { responsiveStoreEnhancer } from 'redux-responsive';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

import retroApp from './root-reducer';


const finalCreateStore = compose(
  responsiveStoreEnhancer,
  applyMiddleware(
    routerMiddleware(browserHistory),
    thunkMiddleware,
    promiseMiddleware,
    createLogger({ collapsed: true}),
  )
)(createStore);


let store;


export function configure(initialState) {
  store = finalCreateStore(retroApp, initialState);

  if (module.hot) {
    // Enable Webpack hot mudle replacement for reducers
    module.hot.accept('./root-reducer', () => store.replaceReducer(retroApp));
  }

  return store;
}

export function get() { return store; };
