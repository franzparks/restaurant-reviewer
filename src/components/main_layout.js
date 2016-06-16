import React, {Component} from 'react';
import RestaurantContainer from './restaurant_container';
import Footer from './footer';

class MainLayout extends Component {

	render() {
	    return (
	  	    <div className="container">
	            <div className="row row-offcanvas row-offcanvas-right">
	                <RestaurantContainer />
	      	        <Footer />
	            </div>

	        </div> 
	  	);
	}  	
}

export default MainLayout;