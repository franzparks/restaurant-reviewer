import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';


import App from './components/app';
import RestaurantContainer from './components/restaurant_container';
import RestaurantDetails from './components/restaurant_details';
import reducers from './reducers';
import Async from './middlewares/async';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
    	<Route path="/" component={App} />
        <Route path="/" component={RestaurantContainer}>
        	<Route path="details" component={RestaurantDetails} />
        </Route>		
    </Router>
  </Provider>
  , document.querySelector('#appContainer'));
