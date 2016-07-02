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
		   console.log("action :"+action.restaurant_id);
			return { ...state, 
				restaurant : state.restaurants.find( (restaurant) =>{
					//console.log(" id : "+restaurant.id);
					return restaurant.id === action.restaurant_id;
				}) 
			};

		default: 
			return state;	    
	}
}