import {
	FETCH_RESTAURANTS,
	FETCH_RESTAURANT
}from '../actions/types';

const INITIAL_STATE = { restaurants : [] ,restaurant : null };

export default function(state = INITIAL_STATE, action){
	switch(action.type) {
		case FETCH_RESTAURANTS:
		    console.log(action.payload);
		    return { ...state, restaurants: action.payload.data };

		case FETCH_RESTAURANT:
			return { ...state, 
				restaurant : state.restaurants.find( (restaurant) =>{
					return restaurant.id === action.id;
				}) };
		default: 
			return state;	    
	}
}