import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import RestaurantContainer from './restaurant_container';
import Restaurant from './restaurant';
import Overview from './overview';
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
        this.loadData          = this.loadData.bind(this);
        this.sortByHighestRated = this.sortByHighestRated.bind(this);
        this.sortByMostReviewed = this.sortByMostReviewed.bind(this);
        this.sortResults       = this.sortResults.bind(this);
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
        //console.log("selection : "+selection);
    }

    sortByHighestRated = (arr,restaurant) => {
        return this.sortResults(arr, restaurant.props.averageRating);
    }

    sortByMostReviewed = (arr, restaurant) => {
        return this.sortResults(arr, restaurant.props.numberOfRatings);
    }

    sortResults = (arr, param) => {
        arr.sort((a,b) => {
            return a[param] > b[param];
        });
    }

    sortUsingCategoryFilter = (arr,filterCategory) => {
    	if(filterCategory){
            ///console.log("results : "+results[2].props.averageRating);
            if(filterCategory === 'all'){
                /* Do Nothing */
                return arr;
            }else{
                if(filterCategory === 'highestRated' && arr.length > 2){
                    return this.sortByHighestRated(arr,arr[0]);
                }else if(filterCategory === 'mostReviewed' && arr.length > 2){
                    return this.sortByMostReviewed(arr, arr[0]);
                }
            }
        }
    }

    sortUsingTextFilter = (arr,text) => {
    	return arr;
    }

    filterRestaurants = (arr, text, category) => {
    	if(text){
    		return this.sortUsingTextFilter(arr,text);
    	}

    	if(category){
            return this.sortUsingCategoryFilter(arr,category);
    	}
    }


    loadData = (data) => {
            //console.log("I got called : "+data);
            var results = [];
            data.forEach((restaurant) => {
                 
                results.push(
                    <Restaurant 
                    key={restaurant.name + Math.random()*10000}
                    name={restaurant.name}
                    image={restaurant.image}
                    address={restaurant.address}
                    cuisineType={restaurant.cuisineType}
                    averageRating = {this.getAverageRating(restaurant)}
                    numberOfRatings={this.getNumberOfRatings(restaurant)}

                    /> 

                );

            });
           
            return results;
        }

    getAverageRating = (restaurant) => {
        if(restaurant.reviews.length > 1){
            var sum = restaurant.reviews.reduce( (prev,curr) => prev + curr );
            return sum / restaurant.reviews.length;
        }else
            return 0; 
    }

    getNumberOfRatings = (restaurant) => {
        return restaurant.reviews.length;
    }

	render() {
		var results = this.loadData(this.props.restaurants);
	    return (
            <div>
                <Header 
                	handleChange={this.handleChange}
                />
		  	    <div className="container">
		            <div className="row row-offcanvas row-offcanvas-right">
		                <div className="col-xs-12 col-sm-9">
					        <ToggleNav />
					        <Overview />
					        <RestaurantContainer 
					            restaurants={results}
					            filterText={this.state.filterText}
					            filterCategory={this.state.filterCategory}
					        />


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
	//console.log("state : "+state.restaurants);
	return { restaurants : state.restaurants };
}
export default connect(mapStateToProps,actions)(MainLayout);