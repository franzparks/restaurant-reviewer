 import React from 'react'
 import RestaurantList from './restaurant_list';

 const RestaurantListWrapper = (props) => {
 	return (
 		<RestaurantList restaurants={props.restaurants} />
 	);
 }
 export default RestaurantListWrapper;