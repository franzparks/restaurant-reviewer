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

    sortUsingCategoryFilter = (arr,filterCategory) => {
    	var sorted = [];
    	if(filterCategory){
            
            if(filterCategory === 'all'){
                /* Do Nothing */
                return arr;
            }else{
                    sorted = arr.sort((a,b) => {
                    //console.log("a : "+Object.keys(a));
	                if(filterCategory === 'highestRated' && arr.length > 2){

	                	return a.props.averageRating < b.props.averageRating;

	                }else if(filterCategory === 'mostReviewed' && arr.length > 2){
	                    return a.props.numberOfRatings < b.props.numberOfRatings;
	                }
                });

                return sorted;
            }
        }else
        	return arr;
    }

    sortUsingTextFilter = (arr,text) => {
       /*ToDo : filter better by ignoring case and using contains or something similar*/

    	var filteredArray = arr.map( (restaurant)=>{

    		var R = restaurant.props;
          if(R.name.indexOf(text) !== -1 || R.address.indexOf(text) !== -1  || R.cuisineType.indexOf(text) !== -1){
          	return restaurant;
          }
    	});
    	return filteredArray;
    }

    filterRestaurants = (arr, text, category = "all") => {
    	
    	if(text){
    		return this.sortUsingTextFilter(arr,text);
    	}

    	if(category){
    		console.log("filterCategory : "+category);
            return this.sortUsingCategoryFilter(arr,category);
    	}
    }

    getAverageRating = (reviews) => {
       
        if(reviews  && reviews.length > 1){
            
            var sum = 0;
            reviews.forEach((review) =>{
                sum += review.rating;
            });

            return sum / reviews.length;
        }else
            return 0; 
    }

    getNumberOfRatings = (reviews) => {
        if(reviews  && reviews.length > 1){
            return reviews.length;
        }
        return 0; 
    }


    renderList(restaurants) {
    	
	    return restaurants.map((restaurant) => {
	        var boundClick = this.handleClick.bind(this, restaurant);
	        var averageRating = this.props.getAverageRating(restaurant.reviews);
	        var numberOfRatings=this.props.getNumberOfRatings(restaurant.reviews);
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
                averageRating = {averageRating}
                numberOfRatings={numberOfRatings}
                
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
