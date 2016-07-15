import axios from 'axios';

import {
	FETCH_RESTAURANTS,
	FETCH_RESTAURANT,
	POST_REVIEW,
	TEXT_FILTER,
	CATEGORY_FILTER
}from './types';

let nextReviewID = 5

export function fetchRestaurants() {
	const request = axios.get('../../src/data/restaurants.json');
	return {
		type: FETCH_RESTAURANTS,
		payload: request
	};
}

export function fetchRestaurant(restaurant) {
   
	return {
		type: FETCH_RESTAURANT,
		restaurant : restaurant
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