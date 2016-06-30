import React from 'react';
import { Link } from 'react-router';
import Overview from './overview';
const RestaurantList = (props) => {
	
	return (
    	<div>
    	<div> List content</div>
    	<Overview />
    	{props.restaurants}
         <Link to="details"> Details</Link>
    	</div>

    );

}
export default RestaurantList;