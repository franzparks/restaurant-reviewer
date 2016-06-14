import React, { Component } from 'react';
import Header from './header';
import RestaurantContainer from './restaurant_container';

export default class App extends Component {
  render() {
    return (
      <div>
      	<Header />
      	<RestaurantContainer />
      </div>
    );
  }
}
