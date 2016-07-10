import React from 'react';
import { Link } from 'react-router';
import Stars from './stars';

const Restaurant = (props) => {

	var path = `restaurants/${props.id}`;
	
	return(
		
	
	    <div className="col-xs-6 col-lg-6">
	        <div className="row">
	        
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
            
            <p aria-label="Average Rating" ><Stars /></p>
             
             </div>

            <div className="row">
            <p aria-label="Cuisine Type" className="">Cuisine Type: {props.cuisineType}</p>
	        <p aria-label="Address">Address: {props.address}</p>
	        
	       
	        <Link 
	        to={path} 
	        onClick={props.handleClick}
	        className="btn btn-default"
	        > 
	        View Details &raquo;
	        </Link>

	        </div>

	     
       
	    </div>

    );
}
export default Restaurant;