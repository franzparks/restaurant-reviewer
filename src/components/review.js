import React from 'react';
import { Link } from 'react-router';

const Review = (props) => {

	return(
	    <div className="col-xs-6">
	        
	        <h2>{props.name}</h2>
	        <p>{props.rating}</p>
	        <p>{props.comment}</p>
	        <p>Date: </p>
	        

	    </div>
    );
}
export default Review;