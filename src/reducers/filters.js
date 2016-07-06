import {
	TEXT_FILTER,
	CATEGORY_FILTER
}from '../actions/types';

const INITIAL_STATE = { category : 'all' ,text : '' };

export default function(state = INITIAL_STATE, action){

	switch(action.type) {
 
		case TEXT_FILTER:
			
			return { ...state, text : action.text };

		case CATEGORY_FILTER:

		    return { ...state, category: action.category };

		default: 
			return state;	    
	}
}