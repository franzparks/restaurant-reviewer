import axios from 'axios';

import {
	FETCH_RESTAURANTS,
	FETCH_RESTAURANT
}from './types';

export function fetchRestaurants() {
	const request = axios.get('../../data/restaurants.json');
	return {
		type: FETCH_RESTAURANTS,
		payload: request
	};
}

export function fetchRestaurant(restaurant_id) {
	return {
		type: FETCH_RESTAURANT,
		restaurant_id : restaurant_id
	};
}

export function postReview() {
	
}