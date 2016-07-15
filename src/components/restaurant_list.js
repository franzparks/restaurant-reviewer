import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import Overview from './overview';
import ToggleNav from './toggle_nav';
import Restaurant from './restaurant';
import Menu from './menu';
import * as actions from '../actions';
import Stars from './stars';
import {
    getAverageRating,
    sortUsingCategoryFilter,
    sortUsingTextFilter,
    filterRestaurants,
    getNumberOfRatings
} from '../utils/utils';

class RestaurantList extends Component {
   
    constructor(props){
    	super(props);

    	this.renderList = this.renderList.bind(this);
    	this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {

		this.props.fetchRestaurants();
	}

    handleClick(restaurant){
        this.props.fetchRestaurant(restaurant);
    }

    renderList(restaurants) {
    	var filteredRestaurants = [];
			filteredRestaurants = filterRestaurants(restaurants,
			this.props.filterText, this.props.filterCategory);
		
	    return filteredRestaurants.map((restaurant) => {
	        var boundClick = this.handleClick.bind(this, restaurant);
	        
	        return (
              <div>
               
	          <Restaurant 
                key={Math.random() * 100000}
                id={restaurant.id }
                data={restaurant}
                handleClick={boundClick}
                name={restaurant.name}
                image={restaurant.image}
                address={restaurant.address}
                cuisineType={restaurant.cuisineType}
                hours={restaurant.operatingHours}
                averageRating={restaurant.averageRating}
                numberOfRatings={restaurant.numberOfRatings}
                checked_star={restaurant.averageRating}
                type={'checkbox'}
               
            /> 
            
            </div>
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
                    <div className="col-xs-12 col-sm-6 ">
                        <ToggleNav key={Math.random()}/>
                        <Overview />                
                        <div>
                        {this.renderList(restaurants)} 

                        </div> 
                       
                    </div>
                    <Menu /> 
                                    
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
