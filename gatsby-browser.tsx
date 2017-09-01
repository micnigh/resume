import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { merge } from 'lodash';

import createStore from './src/state/createStore';

import data from './src/data/';

exports.replaceRouterComponent = ({ history }: any) => {
  const initialState =  merge({}, data);
  const store = createStore(initialState);

  const ConnectedRouterWrapper = ({ children }: any) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );

  return ConnectedRouterWrapper;
};
