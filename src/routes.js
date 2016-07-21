import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';


import MainLayout from './components/main_layout';
import RestaurantList from './components/restaurant_list';
import RestaurantDetails from './components/restaurant_details';
import CreateReview from './components/create_review';


export default (
  <Route path="/" component={MainLayout}>
    <IndexRoute component={RestaurantList} />
    <Route  path="restaurants/:id" component={RestaurantDetails} />
    <Route name="revs" path=":id/reviews" component={CreateReview} />

 	<Redirect from="restaurants/:id/reviews" to=":id/reviews" />

  </Route>



);