import React, {Component} from 'react';
import { Link } from 'react-router';
import Overview from './overview';
import Restaurant from './restaurant';

class RestaurantList extends Component {
   
    constructor(props){
    	super(props);
    	this.renderList = this.renderList.bind(this);
    }

    renderList() {
	    return this.props.restaurants.map((restaurant) => {
	   
	        <Restaurant 
                key={restaurant.id}
                id={restaurant.id}
                name={restaurant.name}
                image={restaurant.image}
                address={restaurant.address}
                cuisineType={restaurant.cuisineType}
                //averageRating = {this.getAverageRating(restaurant.reviews)}
                //numberOfRatings={this.getNumberOfRatings(restaurant.reviews)}
                
            /> 
	      
	    });
    }


	render(){
		return (
	    	<div>
	    	{/*<Overview /> */}
	    	{/*{props.restaurant_components} */}
	    	{this.renderList}
	    	</div>

	    );
    }

}
export default RestaurantList;