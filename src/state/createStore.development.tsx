import { createStore, applyMiddleware, compose } from 'redux';
import * as Redux from 'redux';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/';

let configureStore = (initialState: any) => {
  let store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, promise, createLogger()),
      typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;