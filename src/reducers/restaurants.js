import {
	FETCH_RESTAURANTS,
	FETCH_RESTAURANT,
	POST_REVIEW
}from '../actions/types';

const INITIAL_STATE = { restaurants : [] ,restaurant : {}]
} };

export default function(state = INITIAL_STATE, action){
	switch(action.type) {
        /* Will discontinue using until attached to actual api*/
		case FETCH_RESTAURANT:
			return { ...state, 
				    restaurant : state.restaurants.find( (res) =>{
					return res.id === action.restaurant_id;
				}) 
			};

		case FETCH_RESTAURANTS:

		    return { ...state, restaurants: action.payload.data };

        case POST_REVIEW:
            console.log("got id : "+action.review.id + " ..and date : "+action.review.date +" ..and rating : "+ action.review.rating);
        	return { ...state,
				    restaurants : state.restaurants.map( (res) =>{
				    	if(res.id === action.review.id){
				    		/* to do: increment review by id count */
                         	return { ...res.reviews, ...action.review};
				    	}
					    return res;
				    }) 
				}
	

		default: 
			return state;	    
	}
}