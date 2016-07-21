import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';

import routes from './routes';

import reducers from './reducers';
import Async from './middlewares/async';

require('../assets/jquery.min.js');
require("../assets/offcanvas.css");
require("../assets/star_presentation.css");
require("../assets/stars.css");


const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('#appContainer'));
