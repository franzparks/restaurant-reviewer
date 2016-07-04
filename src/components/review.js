import React from 'react';
import { Link } from 'react-router';

const Review = (props) => {

	return(
	    <div className="col-xs-4">
	        
	        <h4>{props.name}</h4>
	        <p>{props.rating}</p>
	        <p>{props.comment}</p>
	        <p>Date: </p>
	        

	    </div>
    );
}
export default Review;