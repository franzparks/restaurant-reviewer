import React,{Component} from 'react';
import { Link } from 'react-router';

const RestaurantDetails = (props) =>{
	//console.log("data : "+Object.keys(props));

	//console.log("single restaurant from app state : "+props.fetchRestaurant(props.params.id));

	//var restaurant1 = props.restaurants.find((res) =>{
		
	//	return res.props.id === props.params.id;
	//});
   props.fetchRestaurant(props.params.id);
	//var restaurant = props.fetchRestaurant(props.params.id);
	//console.log("keys on restaurant  : "+Object.keys(props.restaurant));

	//to do: display reviews from rawData

	return (
		<div>
			<div className="col-xs-6 col-lg-4">
				<button>Write A Review </button>
			</div>
			<div className="col-xs-6 col-lg-4">
		        <h2>{restaurant.name}</h2>
		        <p>{restaurant.image}</p>
		        <p>Address: {restaurant.address}</p>
		        <p>Type: {restaurant.cuisineType}</p>
		        
		        <Link to="/"> Back</Link>

		    </div>
	    </div>
	);

}
export default RestaurantDetails;