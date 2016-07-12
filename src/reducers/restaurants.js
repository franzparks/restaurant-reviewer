import {
	FETCH_RESTAURANTS,
	FETCH_RESTAURANT,
	POST_REVIEW
}from '../actions/types';

const INITIAL_STATE = { restaurants : [] ,restaurant : null };

export default function(state = INITIAL_STATE, action){
	switch(action.type) {

		case FETCH_RESTAURANT:
		
			return { ...state,  restaurant : action.restaurant };

		case FETCH_RESTAURANTS:
            
		    return { ...state, restaurants:  action.payload.data  };

        case POST_REVIEW:
            //console.log("posted restaurant and  reviews : "+ action.restaurant.reviews.length );
            //console.log("posted restaurant id : "+ action.restaurant.id );
        	return { ...state , restaurants :[ ...state.restaurants, action.restaurant] };
	

		default: 
			return state;	    
	}
}