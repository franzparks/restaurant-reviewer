import React from 'react';
import { Link } from 'react-router';

const MenuItem = (props) =>{
	return (
	   
		<Link
		    
		    key={Math.random() * 10000}
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