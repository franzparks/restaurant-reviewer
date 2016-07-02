import {
	FETCH_RESTAURANTS,
	FETCH_RESTAURANT
}from '../actions/types';

const INITIAL_STATE = { restaurants : [] ,restaurant : {} };

export default function(state = INITIAL_STATE, action){
	switch(action.type) {

		case FETCH_RESTAURANT:
			return { ...state, 
				    restaurant : state.restaurants.find( (res) =>{
					return res.id === action.restaurant_id;
				}) 
			};

		case FETCH_RESTAURANTS:
		    console.log("called...");
		    return { ...state, restaurants: action.payload.data };
	

		default: 
			return state;	    
	}
}