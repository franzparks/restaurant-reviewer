import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import RestaurantContainer from './restaurant_container';

export default class App extends Component {
  render() {
    return (
      <div className="container">
      	<Header />
      	<RestaurantContainer />
      	<Footer />
      </div>
    );
  }
}
