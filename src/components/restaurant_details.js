import React from 'react';
import { Link } from 'react-router';

const RestaurantDetails = (props) =>{
	//console.log("data : "+Object.keys(props.restaurants));
	//console.log("data : "+props.restaurants[0]);
	//var name = props.params.name;
	var restaurant = props.restaurants.find((res) =>{
		//console.log("name "+Object.keys(res.props));
		return res.props.id === props.params.id;
	});

	console.log("restaurant "+restaurant.props.rawData);

	//to do: display reviews from rawData

	return (
		<div className="col-xs-6 col-lg-4">
	        <h2>{restaurant.props.name}</h2>
	        <p>{restaurant.props.image}</p>
	        <p>Address: {restaurant.props.address}</p>
	        <p>Type: {restaurant.props.cuisineType}</p>
	        
	        <Link to="/"> Back</Link>

	    </div>
	);

}
export default RestaurantDetails;