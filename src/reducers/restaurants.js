import {
	FETCH_RESTAURANTS
}from '../actions/types';

export default function(state = [], action){
	switch(action.type) {
		case FETCH_RESTAURANTS:
		    console.log(action.payload);
		    return [ ...state, ...action.payload.data ];
		case FETCH_RESTAURANT:
			return {};    
	}

	return state;
}