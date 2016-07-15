import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, History } from 'react-router';
import createBrowserHistory from '../node_modules/history/lib/createBrowserHistory';
import * as $ from '../assets/jquery.min';

import { useRouterHistory } from 'react-router';
import { createHistory } from 'history';

const history = useRouterHistory(createHistory)({
  basename: '/'
});

import routes from './routes';

import reducers from './reducers';
import Async from './middlewares/async';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={history} routes={routes} />
  </Provider>
  , document.querySelector('#appContainer'));
