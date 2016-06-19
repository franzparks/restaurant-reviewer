import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import RestaurantContainer from './restaurant_container';
import Overview from './overview';
import Footer from './footer';
import Menu from './menu';
import ToggleNav from './toggle_nav';

class MainLayout extends Component {

	componentWillMount() {
		this.props.fetchRestaurants();
	}

	render() {
		
	    return (
	  	    <div className="container">
	            <div className="row row-offcanvas row-offcanvas-right">
	                <div className="col-xs-12 col-sm-9">
				        <ToggleNav />
				        <Overview />
				        <RestaurantContainer 
				            restaurants={this.props.restaurants}
				            filterCategory={this.props.filterCategory}/>
				    </div>
				    <Menu />	      	        
	            </div>
	            <Footer />
	        </div> 
	  	);
	}  	
}
function mapStateToProps(state) {
	return { restaurants : state.restaurants };
}
export default connect(mapStateToProps,actions)(MainLayout);