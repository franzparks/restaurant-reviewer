import React from 'react';
import { Link } from 'react-router';

const Restaurant = (props) => {
	//console.log("raw data "+Object.keys(props.id));
	var path = `restaurants/${props.id}`;
	
	return(
	    <div className="col-xs-6 col-lg-4">
	        
	        <h2>{props.name}</h2>
	        <p>{props.image}</p>
	        <p>Address: {props.address}</p>
	        <p>Type: {props.cuisineType}</p>
	        <Link to={path} className="btn btn-default" > View details &raquo;</Link>
        

	    </div>
    );
}
export default Restaurant;