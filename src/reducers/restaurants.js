import {
	FETCH_RESTAURANTS,
	FETCH_RESTAURANT,
	POST_REVIEW
}from '../actions/types';

const INITIAL_STATE = { restaurants : [] ,restaurant : null };

export default function(state = INITIAL_STATE, action){
	switch(action.type) {

        /* Will discontinue using until attached to actual api*/
		case FETCH_RESTAURANT:
			//console.log("action is passing id : "+ action.restaurant_id);
			//var restaurant1 = state.restaurants.find( (res) =>{
			//		return res.id === action.restaurant_id;
			//});
			//state.restaurant = restaurant;
			//console.log(" found : "+restaurant);
			return { ...state,
				    restaurant : action.restaurant
			};

		case FETCH_RESTAURANTS:

		    return { ...state, restaurants: action.payload.data };

        case POST_REVIEW:
            console.log(" action keys : "+ Object.keys(action));
            //console.log("got id : "+action.review.id + " ..and date : "+action.review.date +" ..and rating : "+ action.review.rating);
        	return { ...state , restaurants :[ ...state.restaurants, action.restaurant] }; //, ...state.restaurants, {action.restaurant}
	

		default: 
			return state;	    
	}
}