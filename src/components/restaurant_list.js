import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import Overview from './overview';
import Restaurant from './restaurant';
import * as actions from '../actions';

class RestaurantList extends Component {
   
    constructor(props){
    	super(props);
    	this.renderList = this.renderList.bind(this);
    	this.handleClick = this.handleClick.bind(this);
    }

    handleClick(restaurant){
    	console.log(" I have been clicked!");
        this.props.fetchRestaurant(restaurant);
    }

    renderList(restaurants) {
    	
	    return restaurants.map((restaurant) => {
	        var boundClick = this.handleClick.bind(this, restaurant);
	        return (
	          <Restaurant 
                key={restaurant.id}
                id={restaurant.id}
                data={restaurant}
                handleClick={boundClick}
                name={restaurant.name}
                image={restaurant.image}
                address={restaurant.address}
                cuisineType={restaurant.cuisineType}
                //averageRating = {this.getAverageRating(restaurant.reviews)}
                //numberOfRatings={this.getNumberOfRatings(restaurant.reviews)}
                
            /> 
            );
	      
	    });
        
    }


	render(){
		
		return (
	    	<div>
	    	{/*<Overview /> */}
	    	{/*{props.restaurant_components} */}
	    	
	    	{this.renderList(this.props.restaurants)}

	    	</div>

	    );
    }

}


export default connect(null,actions)(RestaurantList);
