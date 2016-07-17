import React from 'react';
import { Route, IndexRoute } from 'react-router';


import MainLayout from './components/main_layout';
import RestaurantList from './components/restaurant_list';
import RestaurantDetails from './components/restaurant_details';
import CreateReview from './components/create_review';


export default (
  <Route path="/" component={MainLayout}>
    <IndexRoute component={CreateReview} />
    <Route  path="restaurants/:id" component={RestaurantDetails} />
    <Route  path=":id/new" component={CreateReview} />
    <Route  path="restaurants/:id/new" component={CreateReview} />



  </Route>

);