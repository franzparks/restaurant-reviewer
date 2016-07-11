import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import Overview from './overview';
import ToggleNav from './toggle_nav';
import Restaurant from './restaurant';
import Menu from './menu';
import * as actions from '../actions';

class RestaurantList extends Component {
   
    constructor(props){
    	super(props);

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

    handleClick(restaurant){
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
      
    	return arr.filter((R) =>{

          if(R.name.indexOf(text) !== -1 || R.address.indexOf(text) !== -1  || R.cuisineType.indexOf(text) !== -1){
            return R;
          }
          
    	});
    	
    }

    filterRestaurants = (arr, text, category) => {
    
    	if(text){
    		return this.sortUsingTextFilter(arr,text);
    	}

    	if(category){
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
	        
	        return (
              <div>
                
	          <Restaurant 
                key={Math.random() * 100000}
                id={restaurant.id +(Math.random() * 100000)}
                data={restaurant}
                handleClick={boundClick}
                name={restaurant.name}
                image={restaurant.image}
                address={restaurant.address}
                cuisineType={restaurant.cuisineType}
                hours={restaurant.operatingHours}
                checked_star={'5'}
               
            /> 
            
            </div>
            );
	      
	    });

    }


	render(){

		var restaurants = this.props.restaurants.map((res) => {
			var averageRating = this.getAverageRating(res.reviews);
	        var numberOfRatings=this.getNumberOfRatings(res.reviews);
               return { ...res, averageRating :averageRating, numberOfRatings : numberOfRatings   }
		} );
		
		return (
	    	<div>

                <div className="row row-offcanvas row-offcanvas-right">
                    <div className="col-xs-12 col-sm-9">
                        <ToggleNav />
                        {/*<Overview /> */}                 
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
