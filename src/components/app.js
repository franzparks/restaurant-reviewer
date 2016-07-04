import React, { Component } from 'react';
import Footer from './footer';
import MainLayout from './main_layout';

import { Link } from 'react-router';

export default class App extends Component {
    render() {
	    return (
	        <div>
	            <MainLayout /> 
	        </div>     
	    );
    }
}
