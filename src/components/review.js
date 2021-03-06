import React from 'react';
import { Link } from 'react-router';
import Stars from './stars';

const Review = (props) => {

	return(
	    <div className="col-xs-12 col-lg-6">
	        <hr />
	        <h4>{props.name}</h4>
	        <div className="flex-container">
	        <p className="extra-padding"><strong>Rating : </strong> </p>
	       
	        <div>
                <Stars 
                    key={Math.random() * 10000}
                    checked_star={props.rating} 
                    keys={[
    					Math.random() * 100000,
    					Math.random() * 100000,
    					Math.random() * 100000,
    					Math.random() * 100000,Math.random() * 100000
    				]}
                />
                       
            </div>
            </div>
	        
	        <p><strong>Comment: </strong> {props.comment}</p>
	        <p><strong>Date: </strong> {props.date}</p>
	        

	    </div>
    );
}
export default Review;