import axios from 'axios';

import {
	FETCH_RESTAURANTS,
	FETCH_RESTAURANT,
	POST_REVIEW,
	TEXT_FILTER,
	CATEGORY_FILTER
}from './types';

let nextReviewID = 5

const request = axios.get('../../src/data/restaurants.json');

export function fetchRestaurants() {
	
	return {
		type: FETCH_RESTAURANTS,
		payload: request
	};
}

export function fetchRestaurant(restaurant_id) {

	return {
		type: FETCH_RESTAURANT,
		payload: request,
		restaurant_id : restaurant_id
	}

}

export function postReview(restaurant) {

	return {
		type: POST_REVIEW,
		restaurant : restaurant
	}
	
}

export function setTextFilter(text){
	
	return {
		type : TEXT_FILTER,
		text : text
	}
}


export function setCategoryFilter(category){
	return {
		type : CATEGORY_FILTER,
		category : category
	}
}