import React from 'react';
import { Link } from 'react-router';

const RestaurantDetails = (props) =>{
	console.log("data : "+Object.keys(props.params));
	console.log("data : "+props.params.name);
	//var name = props.params.name;
	var restaurant = props.restaurants.find((res) =>{
		return res.name === props.params.name;
	});
	console.log("restaurant "+restaurant);

	return (
		<div className="col-xs-6 col-lg-4">
	        <h2>{restaurant.name}</h2>
	        <p>{restaurant.image}</p>
	        <p>Address: {restaurant.address}</p>
	        <p>Type: {restaurant.cuisineType}</p>
	        <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
	        <Link to="/"> Back</Link>

	    </div>
	);

}
export default RestaurantDetails;