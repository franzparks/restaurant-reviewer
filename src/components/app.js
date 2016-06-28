import React, { Component } from 'react';
import Footer from './footer';
import MainLayout from './main_layout';
import RestaurantContainer from './restaurant_container';

import { Link } from 'react-router';

export default class App extends Component {
    render() {
	    return (
	        <div>
	            <MainLayout /> 
	            {this.props.children} 
	             
	        </div>     
	    );
    }
}
