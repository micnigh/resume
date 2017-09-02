import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { merge } from 'lodash';

import data from './src/data/';

import createStore from './src/state/createStore.production';

/**
 * Note: we can only call this once!
 * https://www.gatsbyjs.org/docs/ssr-apis/#replaceRenderer
 * 
 * Be careful about using server side rendering plugins
 * TODO: switch back to plugins when this problem is solved
 */
export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }: any) => {
  const sheet = new ServerStyleSheet();
  const initialState =  merge({}, data);
  const store = createStore(initialState);

  const ConnectedBody = () => (
    <Provider store={store}>
      <StyleSheetManager sheet={sheet.instance}>
        {bodyComponent}
      </StyleSheetManager>
    </Provider>
  );

  replaceBodyHTMLString(renderToString(<ConnectedBody/>));
  setHeadComponents([sheet.getStyleElement()]);
};
