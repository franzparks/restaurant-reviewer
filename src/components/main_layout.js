import React, {Component} from 'react';
import RestaurantContainer from './restaurant_container';
import Overview from './overview';
import Footer from './footer';
import Menu from './menu';
import ToggleNav from './toggle_nav';

class MainLayout extends Component {

	render() {
		let RESTAURANTS = [{"name":"Lusaka Restaurant", "address":"101 Lsk", "image":"image","cuisineType":"Zambian"},
		{"name":"Ndola", "address":"101 Ndola", "image":"image","cuisineType":"Zambian"},
		{"name":"Livingstone", "address":"101 Lvstone", "image":"image","cuisineType":"Zambian"}];
	    return (
	  	    <div className="container">
	            <div className="row row-offcanvas row-offcanvas-right">
	                <div className="col-xs-12 col-sm-9">
				        <ToggleNav />
				        <Overview />
				        <RestaurantContainer 
				            restaurants={RESTAURANTS}
				            filterCategory={this.props.filterCategory}/>
				    </div>
				    <Menu />	      	        
	            </div>
	            <Footer />
	        </div> 
	  	);
	}  	
}

export default MainLayout;