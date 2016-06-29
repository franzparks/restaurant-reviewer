import React from 'react';
import { Link } from 'react-router';
const RestaurantList = (props) => {
	
	return (
    	<div>
    	<div> List content</div>
    	{props.restaurants}
         <Link to="details"> Details</Link>
    	</div>

    );

}
export default RestaurantList;