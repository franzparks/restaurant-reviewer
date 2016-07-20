import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import Overview from './overview';
import ToggleNav from './toggle_nav';
import Restaurant from './restaurant';
import FilterMenu from './menu';
import * as actions from '../actions';
import Stars from './stars';
import {
    getAverageRating,
    sortUsingCategoryFilter,
    sortUsingTextFilter,
    filterRestaurants,
    getNumberOfRatings
} from '../utils/utils';

require('../../assets/jquery.min.js');
require("../../assets/offcanvas.css");
require("../../assets/star_presentation.css");
require("../../assets/stars.css");


class RestaurantList extends Component {
   
    constructor(props){
        
    	super(props);

    	this.renderList = this.renderList.bind(this);

        this.state = {"selected" :"" };
        this.handleClick = this.handleClick.bind(this);
        this.handleSelected = this.handleSelected.bind(this);
    }

    componentWillMount() {
		this.props.fetchRestaurants();
	}

    handleClick (eventKey){

        /* Identify selected item*/
        this.setState({selected : eventKey});
    }

    handleSelected(eventKey){
        this.setState({selected : eventKey});
    }

    renderList(restaurants) {
    	var filteredRestaurants = [];
			filteredRestaurants = filterRestaurants(restaurants,
			this.props.filterText, this.props.filterCategory);
		
	    return filteredRestaurants.map((restaurant) => {
	        
	        return (
              
               
	          <Restaurant 
                key={Math.random() * 100000}
                id={restaurant.id }
                data={restaurant}
                name={restaurant.name}
                image={restaurant.image}
                address={restaurant.address}
                cuisineType={restaurant.cuisineType}
                hours={restaurant.operatingHours}
                averageRating={restaurant.averageRating}
                numberOfRatings={restaurant.numberOfRatings}
                checked_star={restaurant.averageRating}
               
            /> 
            
            
            );
	      
	    });

    }


	render(){

		var restaurants = this.props.restaurants.map((res) => {
			var averageRating = getAverageRating(res.reviews);
	        var numberOfRatings= getNumberOfRatings(res.reviews);
               return { ...res, averageRating :averageRating, numberOfRatings : numberOfRatings   }
		} );
		
		return (
	    	<div>

                <div className="row row-offcanvas row-offcanvas-right">
                    <FilterMenu key={Math.random()} 
                        handleClick={this.handleClick}
                        handleSelected={this.handleSelected}
                        selected={this.state.selected}

                    /> 
                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <ToggleNav key={Math.random()}/>
                        <Overview key={Math.random()}/>          
                        <div key={Math.random()}>
                        {this.renderList(restaurants)} 

                        </div> 
                       
                    </div>
                    
                                    
                </div>
		    	
	    	</div>

	    );
    }

}

function mapStateToProps(state) {
	
	return { 
		restaurants : state.appState.restaurants,
		filterText : state.filterState.text,
		filterCategory : state.filterState.category
	};
}
export default connect(mapStateToProps,actions)(RestaurantList);
