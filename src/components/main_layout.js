import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Restaurant from './restaurant';
import RestaurantList from './restaurant_list';
import Footer from './footer';
import Menu from './menu';
import ToggleNav from './toggle_nav';
import Header from './header';

class MainLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {filterText : '', filterCategory : ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
        this.getAverageRating = this.getAverageRating.bind(this);
        this.getNumberOfRatings = this.getNumberOfRatings.bind(this);
        this.sortUsingCategoryFilter = this.sortUsingCategoryFilter.bind(this);
        this.filterRestaurants = this.filterRestaurants.bind(this);
        this.sortUsingTextFilter = this.sortUsingTextFilter.bind(this);
    }

	componentWillMount() {
		this.props.fetchRestaurants();
	}

	handleChange = function(text){
        this.setState({ filterText : text });
    }

    handleSelection = function(selection){
    	this.setState({filterCategory : selection});
    }

    
	render() {
		//var results = this.loadData(this.props.restaurants);
        //var results = this.props.restaurants;
		//results = this.filterRestaurants(results, this.state.filterText, this.state.filterCategory);
		
        return (
            <div>
                <Header 
                	handleChange={this.handleChange}
                />

		  	    <div className="container">
		            <div className="row row-offcanvas row-offcanvas-right">
		                <div className="col-xs-12 col-sm-9">
					        <ToggleNav />                  
                            <div>{React.cloneElement(this.props.children,
	                            { 
		                            restaurants: this.props.restaurants,
                                    filterText: this.state.filterText,
                                    filterCategory: this.state.filterCategory
	                            } 
                             )}
                            </div> 
                           
					    </div>
					    <Menu 
					    	selectionHandler={this.handleSelection}
					    />
					         	        
		            </div>
		            <Footer />

		        </div> 
	        </div>
	  	);
	}  	
}
function mapStateToProps(state) {
	//console.log("app state : "+Object.keys(state));
	//console.log("restaurants : "+ state.appState.restaurants)
	//console.log("restaurant : "+ state.appState.restaurant)
	return { restaurants : state.appState.restaurants };
}
export default connect(mapStateToProps,actions)(MainLayout);