import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import RestaurantContainer from './restaurant_container';
import Overview from './overview';
import Footer from './footer';
import Menu from './menu';
import ToggleNav from './toggle_nav';
import Header from './header';

class MainLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {filterText : ''};
        this.handleChange = this.handleChange.bind(this);
    }

	componentWillMount() {
		this.props.fetchRestaurants();
	}

	handleChange = function(text){
        this.setState({ filterText : text });
    }

	render() {
		
	    return (
            <div>
                <Header />
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
	        </div>
	  	);
	}  	
}
function mapStateToProps(state) {
	return { restaurants : state.restaurants };
}
export default connect(mapStateToProps,actions)(MainLayout);