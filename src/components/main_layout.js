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

    sortUsingCategoryFilter = (arr,filterCategory) => {
    	var sorted = [];
    	if(filterCategory){
            
            if(filterCategory === 'all'){
                /* Do Nothing */
                return arr;
            }else{
                    sorted = arr.sort((a,b) => {

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
    		//console.log("filterCategory : "+category);
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

	render() {
		//var results = this.loadData(this.props.restaurants);
        var results = this.props.restaurants;
		results = this.filterRestaurants(results, this.state.filterText, this.state.filterCategory);
		
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
                                    getAverageRating: this.getAverageRating,
                                    getNumberOfRatings: this.getNumberOfRatings
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