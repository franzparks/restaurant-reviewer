import React from 'react';
import { Link } from 'react-router';
import Stars from './stars';

const Restaurant = (props) => {

	var path = `restaurants/${props.id}`;
	
	return(
		
	
	    <div className="col-xs-12  col-sm-6">
	        <div className="row">
	        
	        <h4>{props.name}</h4>
	        <p>
	        <Link to={path}  >
	        <img src={props.image} 
	        	className="img-responsive"
	        	alt="Image of restaurant cuisine type">
	        </img>
	        </Link>
	        </p>
            
            <div aria-label="Average Rating"  className="flex-container">
            	<Stars 
            	    key={Math.random() * 10000} 
            		checked_star={props.checked_star}
            		keys={[
		                Math.random() * 10000,
		                Math.random() * 10000,
		                Math.random() * 10000,
		                Math.random() * 10000,Math.random() * 10000
                    ]}
            	/>

            	<div className="number-of-reviews">
                	{props.numberOfRatings} Reviews
            	</div>
            </div>

             
            </div>

            <div className="row">
            <div aria-label="Cuisine Type" className="flex-item"><strong>Cuisine Type:</strong> {props.cuisineType}</div>
	        <div aria-label="Address" className="flex-item"><strong>Address:</strong> {props.address}</div>
	        <div aria-label="Hours Open" className="flex-item">
	        	<strong>Hours Open:</strong> 
	        	<div>
	        	{props.hours.open} AM to {props.hours.close } PM
	        	</div>
	        </div>
	        
	       
	        <Link 
	        to={path} 
	        onClick={props.handleClick}
	        className="btn btn-primary flex-item"
	        > 
	        View Details &raquo;
	        </Link>

	        </div>	     
       
	    </div>

    );
}
export default Restaurant;