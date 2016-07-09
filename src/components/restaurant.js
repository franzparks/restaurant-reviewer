import React from 'react';
import { Link } from 'react-router';

const Restaurant = (props) => {

	var path = `restaurants/${props.id}`;
	
	return(
		
	
	    <div className="col-xs-6 col-lg-6">
	        
	        <h3>{props.name}</h3>
	        <p>
	        <Link 
	        to={path} 
	        onClick={props.handleClick} >
	        <img src={props.image} 
	        className="img-responsive"
	        alt="Image of restaurant cuisine type">
	        
	        </img>
	        </Link>
	        </p>
            
            <p aria-label="Average Rating">Average Rating: </p>
            <p aria-label="Cuisine Type">Cuisine Type: {props.cuisineType}</p>
	        <p aria-label="Address">Address: {props.address}</p>
	       
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