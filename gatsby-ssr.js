import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { merge } from 'lodash';
import Layout from './src/layouts/';

import data from './src/data/';

import createStore from './src/state/createStore.production';

/**
 * Note: we can only call this once!
 * https://www.gatsbyjs.org/docs/ssr-apis/#replaceRenderer
 * 
 * Be careful about using server side rendering plugins
 * TODO: switch back to plugins when this problem is solved
 */
// export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  
//   console.error(`DEUREURWE3121saR`)

//   const sheet = new ServerStyleSheet();
//   const initialState =  merge({}, data);
//   const store = createStore(initialState);

//   console.error(`DEUREURWER`)

//   const App = () => (
//     <Provider store={store}>
//       <StyleSheetManager sheet={sheet.instance}>
//         <Layout>
//           {bodyComponent}
//         </Layout>
//       </StyleSheetManager>
//     </Provider>
//   );

//   let appAsString = ``;
//   try {
//     appAsString = renderToString(<App />);
//     console.log(appAsString);
//   } catch (err) {
//     console.error(`OH NOOOOO`);
//     console.error(err);
//   }
  

//   replaceBodyHTMLString(appAsString);
//   setHeadComponents([sheet.getStyleElement()]);
// };


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