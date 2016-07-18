import React from 'react';

const Stars = (props) => {

const checked = props.checked_star + "";
return (

	<div className="rated">

        <label htmlFor={props.keys[0]} className={checked === '5' ? 'selected' : ''}></label>
		<input type="radio"
			id={props.keys[0]}
			key={Math.random() * 10000} 
			name="rating" 
			value="5" 
			role="presentation"
			readOnly
			checked={checked === '5' ? true : false}
			aria-label="Reviewer's Rating" 
			tabIndex="-1"	
		/>

		<label htmlFor={props.keys[1]} className={checked === '4' ? 'selected' : ''}></label>
		<input type="radio"
			id={props.keys[1]}
			key={Math.random() * 10000} 
			name="rating" 
			value="4" 
			role="presentation"
			readOnly
			checked={checked === '4' ? true : false}
			aria-label="Reviewer's Rating"
			tabIndex="-1"  
			
		/>

		<label htmlFor={props.keys[2]} className={checked === '3' ? 'selected' : ''}></label>
		<input type="radio"
			id={props.keys[2]}
			key={Math.random() * 10000} 
			name="rating" 
			value="3" 
			role="presentation"
			readOnly
			checked={checked === '3' ? true : false}
			aria-label="Reviewer's Rating"
			tabIndex="-1"  
			
		/>

		<label htmlFor={props.keys[3]} className={checked === '2' ? 'selected' : ''} ></label>
		<input type="radio"
			id={props.keys[3]}
			key={Math.random() * 10000} 
			name="rating" 
			value="2" 
			role="presentation"
			readOnly
			checked={checked === '2' ? true : false}
			aria-label="Reviewer's Rating"
			tabIndex="-1"  
			
		/>

		<label htmlFor={props.keys[4]} className={checked === '1' ? 'selected' : ''} ></label>
	
		<input 
			type="radio"
			id={props.keys[4]}
			key={Math.random() * 10000} 
			name="rating" 
			value="1" 
			role="presentation"
			readOnly
			checked={checked === '1' ? true : false}
			aria-label="Reviewer's Rating"
			tabIndex="-1"
		/>
	

     </div>

);

}
export default Stars;