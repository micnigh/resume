import * as React from 'react';
import { Provider } from 'react-redux';
import { merge } from 'lodash';
import Layout from './src/layouts/';

import createStore from './src/state/createStore';

import data from './src/data/';

export const wrapPageElement = ({ element, props }) => {
  const initialState =  merge({}, data);
  const store = createStore(initialState);

  if (module.hot) {
    module.hot.accept('./src/data/', () => {
      const nextData = require('./src/data/').default;
      store.dispatch({ type: 'REPLACE_STATE', payload: nextData });
    });
  }

  const ConnectedRootElement = (
    <Provider store={store}>
      <Layout {...props}>
        {element}
      </Layout>
    </Provider>
  );

  return ConnectedRootElement;
};
