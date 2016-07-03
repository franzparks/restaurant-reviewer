import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import MainLayout from './components/main_layout';
import RestaurantList from './components/restaurant_list';
import RestaurantDetails from './components/restaurant_details';
import Review from './components/review';


export default (
  <Route path="/" component={MainLayout}>
    <IndexRoute component={RestaurantList} />
    <Route  path="restaurants/:id" component={RestaurantDetails} />
    <Route  path="restaurants/:id/reviews/new" component={Review}/>

  </Route>

);