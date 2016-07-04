import React, {Component} from 'react';
import { Link } from 'react-router';
import Overview from './overview';
import Restaurant from './restaurant';
import * as actions from '../actions';

class RestaurantList extends Component {
   
    constructor(props){
    	super(props);
    	this.renderList = this.renderList.bind(this);
    }

    renderList(restaurants) {
    	
	    return restaurants.map((restaurant) => {
	    
	        return <Restaurant 
                key={restaurant.id}
                onClick={}
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
	    	{this.renderList(this.props.restaurants)}
	    	</div>

	    );
    }

}

function mapStateToProps(state) {
	//console.log("app state : "+Object.keys(state.appState));
	//console.log("restaurants : "+ state.appState.restaurants)
	//console.log("restaurant from state: "+ Object.keys(state.appState.restaurant));
	return { restaurant : state.appState.restaurant };
}
export default connect(mapStateToProps,actions)(RestaurantList);
