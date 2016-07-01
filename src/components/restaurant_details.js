import React from 'react';
import { Link } from 'react-router';

const RestaurantDetails = (props) =>{
	console.log("data : "+Object.keys(props.restaurants));

	var restaurant = props.restaurants.find((res) =>{
		
		return res.props.id === props.params.id;
	});


	//to do: display reviews from rawData

	return (
		<div>
			<div className="col-xs-6 col-lg-4">
				<button>Write A Review </button>
			</div>
			<div className="col-xs-6 col-lg-4">
		        <h2>{restaurant.props.name}</h2>
		        <p>{restaurant.props.image}</p>
		        <p>Address: {restaurant.props.address}</p>
		        <p>Type: {restaurant.props.cuisineType}</p>
		        
		        <Link to="/"> Back</Link>

		    </div>
	    <div>
	);

}
export default RestaurantDetails;