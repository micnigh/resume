import { createStore, applyMiddleware, compose } from 'redux';
import * as Redux from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import rootReducer from '../reducers/';

let configureStore = (initialState?: any) => {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, promise),
    )
  );
};

export default configureStore;