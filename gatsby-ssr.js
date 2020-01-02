import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { merge } from 'lodash';
import Layout from './src/layouts/';

import data from './src/data/';

import createStore from './src/state/createStore.production';

export const wrapPageElement = ({ element, props }) => {
  const initialState =  merge({}, data);
  const store = createStore(initialState);

  const ConnectedRootElement = (
    <Provider store={store}>
      <Layout {...props}>
        {element}
      </Layout>
    </Provider>
  );

  return ConnectedRootElement;
};