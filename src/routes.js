import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';


import MainLayout from './components/main_layout';
import RestaurantList from './components/restaurant_list';
import RestaurantDetails from './components/restaurant_details';
import CreateReview from './components/create_review';

const NotFound = React.createClass({
  render() {
    return <h2>Not found</h2>
  }
});

export default (

	<div>
  <Route path="/" component={MainLayout}>
    <IndexRoute component={RestaurantList} />
    <Route  path="restaurants/:id" component={RestaurantDetails} />
    <Route name="revs" path=":id/reviews" component={CreateReview} />

 	<Redirect from="restaurants/:id/reviews" to=":id/reviews" />

  </Route>

  <Route path="/#/" component={MainLayout}>
    <IndexRoute component={RestaurantList} />
    <Route  path="/#/restaurants/:id" component={RestaurantDetails} />
    <Redirect from="restaurants/:id/reviews" to="/#/restaurants/:id" />

    <Route  path="/#/:id/reviews" component={CreateReview} />

 	<Redirect from="/#/restaurants/:id/reviews" to="/#/:id/reviews" />

 	<Route path="*" component={NotFound} />

  </Route>

  </div>



);