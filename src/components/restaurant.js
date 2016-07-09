import React from 'react';
import { Link } from 'react-router';

const Restaurant = (props) => {

	var path = `restaurants/${props.id}`;
	
	return(
		
	    <div className="col-xs-6 col-lg-6">
	        
	        <h3>{props.name}</h3>
	        <p>{props.image}</p>
	        <p>Address: {props.address}</p>
	        <p>Type: {props.cuisineType}</p>
	       
	        <Link 
	        to={path} 
	        onClick={props.handleClick}
	        className="btn btn-default"
	        > 
	        View details &raquo;
	        </Link>
	     
       
	    </div>
    );
}
export default Restaurant;