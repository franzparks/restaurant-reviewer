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

export function fetchRestaurant(id) {
	return {
		type: FETCH_RESTAURANT,
		payload: id
	};
}

export function postReview() {
	
}