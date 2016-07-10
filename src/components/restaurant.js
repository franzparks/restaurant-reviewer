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
            
            <div aria-label="Average Rating" ><Stars style={'rating'} condition={'true'}/></div>
             
             </div>

            <div className="row">
            <p aria-label="Cuisine Type"><strong>Cuisine Type:</strong> {props.cuisineType}</p>
	        <p aria-label="Address"><strong>Address:</strong> {props.address}</p>
	        <p aria-label="Hours Open"><strong>Hours Open:</strong> {props.hours.open} to {props.hours.close }</p>
	        
	       
	        <Link 
	        to={path} 
	        onClick={props.handleClick}
	        className="btn btn-primary"
	        > 
	        View Details &raquo;
	        </Link>

	        </div>

	     
       
	    </div>

    );
}
export default Restaurant;