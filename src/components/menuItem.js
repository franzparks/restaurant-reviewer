import React from 'react';

const MenuItem = (props) =>{
	<a 
		href="#"
		name={props.name} 
	    className={props.style}
	 	onClick={props.handleClick} >
	 	{props.label}
	 	</a>
}

export default MenuItem;