import React from 'react';
import { Link } from 'react-router';

const Review = (props) => {

	return(
	    <div className="col-xs-8">
	        
	        <h4>{props.name}</h4>
	        <p>Rating : {props.rating}</p>
	        <p>Comment: {props.comment}</p>
	        <p>Date: </p>
	        

	    </div>
    );
}
export default Review;