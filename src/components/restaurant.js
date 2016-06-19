import React from 'react';

const Restaurant = (props) => {
	
	return(
	    <div className="col-xs-6 col-lg-4">
	        <h2>{props.name}</h2>
	        <p>{props.image}</p>
	        <p>Address: {props.address}</p>
	        <p>Type: {props.cuisineType}</p>
	        <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
	    </div>
    );
}
export default Restaurant;