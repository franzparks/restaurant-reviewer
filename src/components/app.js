import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import RestaurantContainer from './restaurant_container';

export default class App extends Component {
  render() {
    return (
      <div>
    	<Header />
        <div className="container">
            <div className="row row-offcanvas row-offcanvas-right">
      	        <RestaurantContainer />
      	        <Footer />
            </div>
        </div> 
      </div>     
    );
  }
}
