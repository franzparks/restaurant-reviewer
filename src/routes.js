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
    <Route  path=":id/reviews" component={CreateReview} />
    <Route  path="restaurants/:id/reviews" component={CreateReview} />
 	<Redirect from="restaurants/:id/reviews" to="restaurants/:id/reviews" /> 


 	<Route path="*" component={NotFound} />

  </Route>

  <Route path="#/" component={MainLayout}>
    
  </Route> 

  </div>



);