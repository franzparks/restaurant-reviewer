import React from 'react';

const Stars = (props) => {


return (

	<div className="rating">

		<input type="radio"
			id={Math.random() * 10000}
			key={Math.random() * 10000} 
			name="rating" 
			value="5" 
			readOnly={true}
			checked={props.checked_star === '5' ? true : false}  
			
		/>

		<input type="radio"
			id={Math.random() * 10000}
			key={Math.random() * 10000} 
			name="rating" 
			value="4" 
			readOnly={true}
			checked={props.checked_star === '4' ? true : false}  
			
		/>

		<input type="radio"
			id={Math.random() * 10000}
			key={Math.random() * 10000} 
			name="rating" 
			value="3" 
			readOnly={true}
			checked={props.checked_star === '3' ? true : false}  
			
		/>
	
		<input type="radio"
			id={Math.random() * 10000}
			key={Math.random() * 10000} 
			name="rating" 
			value="2" 
			readOnly={true}
			checked={props.checked_star === '2' ? true : false}  
			
		/>

		<input type="radio"
			id={Math.random() * 10000}
			key={Math.random() * 10000} 
			name="rating" 
			value="1" 
			readOnly={true}
			checked={props.checked_star === '1' ? true : false}  	
		/>

     </div>

);

}
export default Stars;