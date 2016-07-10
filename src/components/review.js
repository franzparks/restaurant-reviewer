import React from 'react';
import { Link } from 'react-router';

const Review = (props) => {

	return(
	    <div className="col-xs-8">
	        <hr />
	        <h4>{props.name}</h4>
	        <p><strong>Rating : </strong> {props.rating}</p>
	        <p><strong>Comment: </strong> {props.comment}</p>
	        <p><strong>Date: </strong> {props.date}</p>
	        

	    </div>
    );
}
export default Review;