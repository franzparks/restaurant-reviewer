import React, { Component } from 'react';
import Footer from './footer';
import MainLayout from './main_layout';
import RestaurantContainer from './restaurant_container';

export default class App extends Component {
    render() {
	    return (
	        <div>
	            <MainLayout />    
	        </div>     
	    );
    }
}
