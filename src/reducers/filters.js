import {
	TEXT_FILTER,
	CATEGORY_FILTER
}from '../actions/types';

const INITIAL_STATE = { category : 'all' ,text : '' };

export default function(state = INITIAL_STATE, action){
	switch(action.type) {

     
		case TEXT_FILTER:
			//console.log("action is passing id : "+ action.restaurant_id);
			//var restaurant1 = state.restaurants.find( (res) =>{
			//		return res.id === action.restaurant_id;
			//});k
			//state.restaurant = restaurant;
			//console.log(" found : "+restaurant);
			return { ...state,
				    text : action.text
			};

		case CATEGORY_FILTER:

		    return { ...state, category: action.category };

		default: 
			return state;	    
	}
}