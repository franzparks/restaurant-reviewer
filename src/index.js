import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


import App from './components/app';
import MainLayout from './components/main_layout';
import RestaurantContainer from './components/restaurant_container';
import RestaurantListWrapper from './components/restaurant_list_wrapper';
import RestaurantDetails from './components/restaurant_details';
import reducers from './reducers';
import Async from './middlewares/async';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>

    	<Route  path="/" component={MainLayout} >
	        <Route  component={RestaurantListWrapper} />
	   	    <Route  path="details" component={RestaurantDetails} />
	    </Route>
        		
    </Router>
  </Provider>
  , document.querySelector('#appContainer'));
