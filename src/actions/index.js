import axios from 'axios';

import {
	FETCH_RESTAURANTS,
	FETCH_RESTAURANT,
	POST_REVIEW
}from './types';

let nextReviewID = 0

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
	const request = props;
	return {
		type: POST_REVIEW,
		rev_id : nextReviewID++,
		review : request
	}
	
}