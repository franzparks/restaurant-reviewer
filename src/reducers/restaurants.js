import {
	FETCH_RESTAURANTS,
	FETCH_RESTAURANT
}from '../actions/types';

var INITIAL_STATE = { restaurants : [] ,restaurant : null };

export default function(state = [], action){
	switch(action.type) {
		case FETCH_RESTAURANTS:
		    console.log(action.payload);
		    return [ ...state, ...action.payload.data ];
		    //return { ...INITIAL_STATE, INITIAL_STATE.restaurants.concat(action.payload.data)};

		case FETCH_RESTAURANT:
			return [{}];    
	}

	return state;
}