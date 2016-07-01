import React from 'react';
import { Link } from 'react-router';

const MenuItem = (props) =>{
	return (
		<a 
			href="#"
			name={props.name} 
		    className={props.style}
		    onClick={props.handleClick}
		 	>
		 	{props.label}
		</a>
	);
}

export default MenuItem;