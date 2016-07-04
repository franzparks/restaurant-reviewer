import {
	FETCH_RESTAURANTS,
	FETCH_RESTAURANT,
	POST_REVIEW
}from '../actions/types';

const INITIAL_STATE = { restaurants : [] ,restaurant : {"id": "17",
		"name":"Zambia",
		"image" :"image",
		"address":"101 Santa Clara",
		"cuisineType":"Zambian",
		"operatingHours":{"open":"07","close":"11"},
		"reviews" : [{"id": 1, "rating":2,"name":"Reviewer 1", "comment":"I didn't like it so much"}]
} };

export default function(state = INITIAL_STATE, action){
	switch(action.type) {

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