import {
	FETCH_RESTAURANTS,
	FETCH_RESTAURANT,
	POST_REVIEW
}from '../actions/types';

const INITIAL_STATE = { restaurants : [] ,restaurant : [] };

export default function(state = INITIAL_STATE, action){
	switch(action.type) {

		case FETCH_RESTAURANT:

			return { ...state,  restaurant : action.payload.data.filter( 
				(res) => {
			    	return res.id === action.restaurant_id;
			    })
			};


		case FETCH_RESTAURANTS:
            
		    return { ...state, restaurants:  action.payload.data  };

        case POST_REVIEW:
            
        	return { ...state , restaurants :[ ...state.restaurants, action.restaurant] };

		default: 
			return state;	    
	}
}