import {
	FETCH_RESTAURANTS,
	FETCH_RESTAURANT
}from '../actions/types';

const INITIAL_STATE = { restaurants : [] ,restaurant : null };

export default function(state = INITIAL_STATE, action){
	switch(action.type) {
		case FETCH_RESTAURANTS:
		    console.log(action.payload);
		    //return [ ...state, ...action.payload.data ];
		    return { ...state, restaurants: action.payload.data };

		case FETCH_RESTAURANT:
			return { ...state, restaurant : action.payload.data };
		default: 
			return state;	    
	}

	//return INITIAL_STATE;
}