import React from 'react';

const Stars = (props) => {

const checked = props.checked_star + "";
return (

	<div className="rating">

		<input type="radio"
			id={Math.random() * 10000}
			key={Math.random() * 10000} 
			name="rating" 
			value="5" 
			readOnly={true}
			checked={checked === '5' ? true : false}  
			
		/>

		<input type="radio"
			id={Math.random() * 10000}
			key={Math.random() * 10000} 
			name="rating" 
			value="4" 
			readOnly={true}
			checked={checked === '4' ? true : false}  
			
		/>

		<input type="radio"
			id={Math.random() * 10000}
			key={Math.random() * 10000} 
			name="rating" 
			value="3" 
			readOnly={true}
			checked={checked === '3' ? true : false}  
			
		/>
	
		<input type="radio"
			id={Math.random() * 10000}
			key={Math.random() * 10000} 
			name="rating" 
			value="2" 
			readOnly={true}
			checked={checked === '2' ? true : false}  
			
		/>

		<input type="radio"
			id={Math.random() * 10000}
			key={Math.random() * 10000} 
			name="rating" 
			value="1" 
			readOnly={true}
			checked={checked === '1' ? true : false}  	
		/>

     </div>

);

}
export default Stars;