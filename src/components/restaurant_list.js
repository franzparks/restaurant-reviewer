import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import Overview from './overview';
import Restaurant from './restaurant';
import * as actions from '../actions';

class RestaurantList extends Component {
   
    constructor(props){
    	super(props);
    	//this.state = { restaurants : [] }
    	this.renderList = this.renderList.bind(this);
    	this.handleClick = this.handleClick.bind(this);

        this.getAverageRating = this.getAverageRating.bind(this);
        this.getNumberOfRatings = this.getNumberOfRatings.bind(this);
        this.sortUsingCategoryFilter = this.sortUsingCategoryFilter.bind(this);
        this.filterRestaurants = this.filterRestaurants.bind(this);
        this.sortUsingTextFilter = this.sortUsingTextFilter.bind(this);
    }

    componentWillMount() {
		this.props.fetchRestaurants();
	}

	/*componentDidMount() {
	
		var restaurants = this.props.restaurants.map((res) => {
			var averageRating = this.getAverageRating(res.reviews);
	        var numberOfRatings=this.getNumberOfRatings(res.reviews);
               return { ...res, averageRating :averageRating, numberOfRatings : numberOfRatings   }
		} );

		this.setState({ restaurants : this.props.restaurants });
	}*/

    handleClick(restaurant){
    	//console.log(" I have been clicked!");
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
                    console.log("a : "+Object.keys(a));
	                if(filterCategory === 'highestRated' && arr.length > 2){

	                	return a.averageRating < b.averageRating;

	                }else if(filterCategory === 'mostReviewed' && arr.length > 2){
	                    return a.numberOfRatings < b.numberOfRatings;
	                }
                });

                return sorted;
            }
        }else
        	return arr;
    }

    sortUsingTextFilter = (arr,text) => {
       /*ToDo : filter better by ignoring case and using contains or something similar*/

    	return arr.map((R) =>{

          if(R.name.indexOf(text) !== -1 || R.address.indexOf(text) !== -1  || R.cuisineType.indexOf(text) !== -1){
          	return R;
          }
    	});
    	return arr;
    }

    filterRestaurants = (arr, text, category = "all") => {
    	//console.log("Am I being called? "+arr);
    	if(text){
    		//console.log("Am I being called? "+text);
    		return this.sortUsingTextFilter(arr,text);
    	}

    	if(category){
    		console.log("filterCategory : "+category);
            return this.sortUsingCategoryFilter(arr,category);
    	}

    	return arr;
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
    	var filteredRestaurants = [];
		 filteredRestaurants = this.filterRestaurants(restaurants,
		 this.props.filterText, this.props.filterCategory);
		
	    return filteredRestaurants.map((restaurant) => {
	        var boundClick = this.handleClick.bind(this, restaurant);
	        //var averageRating = this.getAverageRating(restaurant.reviews);
	        //var numberOfRatings=this.getNumberOfRatings(restaurant.reviews);
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

	    //return filteredRestaurants;
        
    }


	render(){

		var restaurants = this.props.restaurants.map((res) => {
			var averageRating = this.getAverageRating(res.reviews);
	        var numberOfRatings=this.getNumberOfRatings(res.reviews);
               return { ...res, averageRating :averageRating, numberOfRatings : numberOfRatings   }
		} );
		
		return (
	    	<div>
	    	{/*<Overview /> */}
	    	

	    	{this.renderList(restaurants)}

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
export default connect(mapStateToProps,actions)(RestaurantList);
