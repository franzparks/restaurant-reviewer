import {
	FETCH_RESTAURANTS
}from '../actions/types';

let INITIAL_STATE = { restaurants = [] ,restaurant = null };
export default function(INITIAL_STATE, action){
	switch(action.type) {
		case FETCH_RESTAURANTS:
		    console.log(action.payload);
		    //return [ ...state, ...action.payload.data ];
		    return { ...INITIAL_STATE, ...INITIAL_STATE.restaurants,...action.payload.data};
		    
		case FETCH_RESTAURANT:
			return {};    
	}

	return state;
}