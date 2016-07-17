import React from 'react';

const Stars = (props) => {

const checked = props.checked_star + "";
return (

	<div className="rating">

        <label htmlFor="5" className={checked === '5' ? 'selected' : ''}></label>
		<input type="radio"
			id={"5"}
			key={Math.random() * 10000} 
			name="rating" 
			value="5" 
			role="presentation"
			checked={checked === '5' ? true : false}  	
		/>

		<label htmlFor="4" className={checked === '4' ? 'selected' : ''}></label>
		<input type="radio"
			id={"4"}
			key={Math.random() * 10000} 
			name="rating" 
			value="4" 
			role="presentation"
			checked={checked === '4' ? true : false}  
			
		/>

		<label htmlFor="3" className={checked === '3' ? 'selected' : ''}></label>
		<input type="radio"
			id={"3"}
			key={Math.random() * 10000} 
			name="rating" 
			value="3" 
			role="presentation"
			checked={checked === '3' ? true : false}  
			
		/>

		<label htmlFor="2" className={checked === '2' ? 'selected' : ''} ></label>
		<input type="radio"
			id={"2"}
			key={Math.random() * 10000} 
			name="rating" 
			value="2" 
			role="presentation"
			checked={checked === '2' ? true : false}  
			
		/>

		<label htmlFor="1" className={checked === '1' ? 'selected' : ''} ></label>
		<input type="radio"
			id={"1"}
			key={Math.random() * 10000} 
			name="rating" 
			value="1" 
			role="presentation"
			checked={checked === '1' ? true : false}
		/>

     </div>

);

}
export default Stars;