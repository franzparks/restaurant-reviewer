import React from 'react';
import { Link } from 'react-router';
import Stars from './stars';

const Review = (props) => {

	return(
	    <div className="col-xs-8">
	        <hr />
	        <h4>{props.name}</h4>
	        <div className="flex-container">
	        <strong>Rating : </strong> 
	       
	        <div aria-label="Reviewer's Rating" >
                        <Stars 
                            key={Math.random() * 10000}
                            style={'rating'}
                            condition={false}
                            checked_star={props.rating} 
                            type={'checkbox'}
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