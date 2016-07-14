import React from 'react';
import { Link } from 'react-router';

const MenuItem = (props) =>{
	return (
		<Link
		    data-toggle="offcanvas" 
		    data-on="On" data-off="Off"
			to="/"
			name={props.name} 
		    className={props.style}
		    onClick={props.handleClick}
		 	>
		 	{props.label}
		</Link>
	);
}

export default MenuItem;