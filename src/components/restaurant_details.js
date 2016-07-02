import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import { Link } from 'react-router';

class RestaurantDetails  extends Component{
	//console.log("data : "+Object.keys(props));
    constructor(props){
    	super(props);
    }

	componentWillMount(){
		this.props.fetchRestaurant(this.props.params.id);
	}

	//console.log("single restaurant from app state : "+props.fetchRestaurant(props.params.id));

	//var restaurant1 = props.restaurants.find((res) =>{
		
	//	return res.props.id === props.params.id;
	//});
   
	//var restaurant = props.fetchRestaurant(props.params.id);
	//console.log("keys on restaurant  : "+Object.keys(props.restaurant));

	//to do: display reviews from rawData
    render(){
    	console.log("props : "+ Object.keys(this.props));
		return (
			
			<div>
				<div className="col-xs-6 col-lg-4">
					<button>Write A Review </button>
				</div>
				<div className="col-xs-6 col-lg-4">
			        <h2>{this.props.restaurant.name}</h2>
			        <p>{this.props.restaurant.image}</p>
			        <p>Address: {this.props.restaurant.address}</p>
			        <p>Type: {this.props.restaurant.cuisineType}</p>
			        
			        <Link to="/"> Back</Link>

			    </div>
		    </div>
		  
		);
    }

}

function mapStateToProps(state) {
	//console.log("app state : "+Object.keys(state));
	//console.log("restaurants : "+ state.appState.restaurants)
	//console.log("restaurant : "+ state.appState.restaurant)
	return { restaurant : state.appState.restaurant };
}
export default connect(mapStateToProps,actions)(RestaurantDetails);
