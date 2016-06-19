import axios from 'axios';

import {
	FETCH_RESTAURANTS
}from './types';

export function fetchRestaurants() {
	const request = axios.get('');
	return {
		type: FETCH_RESTAURANTS,
		payload: request
	};
}