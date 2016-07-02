import axios from 'axios';

import {
	FETCH_RESTAURANTS,
	FETCH_RESTAURANT,
	POST_REVIEW
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

export function postReview(props) {
	const request = props; //{props.name, props.rating, props.comment, props.date}//
	return {
		type: POST_REVIEW,
		review : request
	}
	
}