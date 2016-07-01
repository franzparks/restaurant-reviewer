import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import MainLayout from './components/main_layout';
import RestaurantListWrapper from './components/restaurant_list_wrapper';
import RestaurantDetails from './components/restaurant_details';


export default (
  <Route path="/" component={MainLayout}>
    <IndexRoute component={RestaurantListWrapper} />
    <Route  path="restaurants/:id" component={RestaurantDetails} />
    <Route  path="reviews/new" />

  </Route>
);