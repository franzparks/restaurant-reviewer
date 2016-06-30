import React from 'react';
import { Link } from 'react-router';

const RestaurantDetails = (props) =>{
	//console.log("data : "+Object.keys(props));
	console.log("data : "+props.params);
	var name = props.params.name;
	var restaurant = props.restaurants.reduce((res) =>{
		return res.name === name;
	});

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