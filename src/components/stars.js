import React from 'react';

require('../../assets/jquery.min.js');
require("../../assets/offcanvas.css");
require("../../assets/star_presentation.css");
var style = require("../../assets/stars.css");

const Stars = (props) => {

const checked = props.checked_star + "";
return (

	<div className="rated">

        <label htmlFor={props.keys[0]} className={checked === '5' ? 'selected' : ''} aria-label="Reviewer's Rating"></label>
		<input type="radio"
			id={props.keys[0]}
			key={Math.random() * 10000} 
			name="rating" 
			value="5" 
			role="presentation"
			readOnly
			checked={checked === '5' ? true : false}
			tabIndex="-1" 
				
		/>

		<label htmlFor={props.keys[1]} className={checked === '4' ? 'selected' : ''} aria-label="Reviewer's Rating"></label>
		<input type="radio"
			id={props.keys[1]}
			key={Math.random() * 10000} 
			name="rating" 
			value="4" 
			role="presentation"
			readOnly
			checked={checked === '4' ? true : false}
			tabIndex="-1"
			
		/>

		<label htmlFor={props.keys[2]} className={checked === '3' ? 'selected' : ''} aria-label="Reviewer's Rating"></label>
		<input type="radio"
			id={props.keys[2]}
			key={Math.random() * 10000} 
			name="rating" 
			value="3" 
			role="presentation"
			readOnly
			checked={checked === '3' ? true : false}
			tabIndex="-1"
			 
			
		/>

		<label htmlFor={props.keys[3]} className={checked === '2' ? 'selected' : ''} aria-label="Reviewer's Rating" ></label>
		<input type="radio"
			id={props.keys[3]}
			key={Math.random() * 10000} 
			name="rating" 
			value="2" 
			role="presentation"
			readOnly
			checked={checked === '2' ? true : false}
			tabIndex="-1"
		/>

		<label htmlFor={props.keys[4]} className={checked === '1' ? 'selected' : ''} aria-label="Reviewer's Rating"></label>
	
		<input 
			type="radio"
			id={props.keys[4]}
			key={Math.random() * 10000} 
			name="rating" 
			value="1" 
			role="presentation"
			readOnly
			checked={checked === '1' ? true : false}
			tabIndex="-1"
		/>
	

     </div>

);

}
export default Stars;