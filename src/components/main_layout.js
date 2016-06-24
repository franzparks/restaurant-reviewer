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

    sortByHighestRated = (results,restaurant) => {
        return this.sortResults(results, restaurant.props.averageRating);
    }

    sortByMostReviewed = (results, restaurant) => {
        return this.sortResults(results, restaurant.props.numberOfRatings);
    }

    sortResults = (arr, param) => {
        arr.sort((a,b) => {
            return a[param] > b[param];
        });
    }

    filterRestaurants = (text, category) => {
    	if(text){
    		return //this.s
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