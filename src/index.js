import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, History } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import * as $ from '../assets/jquery.min';

import routes from './routes';

import reducers from './reducers';
import Async from './middlewares/async';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={createBrowserHistory()} routes={routes} />
  </Provider>
  , document.querySelector('#appContainer'));
