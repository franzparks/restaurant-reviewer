import React from 'react';
import FontAwesome from 'react-fontawesome';

const Stars = (props) => {
	//console.log(" got this: "+props.checked_star);

return (

	<div className={props.style} tabIndex="0">

		<input type={props.type}
			id={props.keys[0]}
			key={props.keys[0]} 
			name="rating" 
			value="5" 
			onClick={props.onClick}  
			readOnly={props.condition}
			onChange={ props.condition ? () =>{} : () =>{} }
			checked={props.checked_star === 5 ? true : false}  
			
		/>
		<label htmlFor={props.keys[0]} title="Rocks!" >5 stars</label>

		<input type={props.type} 
			id={props.keys[1]}
			key={props.keys[1]} 
			name="rating" 
			value="4"
			onClick={props.onClick}  
			readOnly={props.condition}
			onChange={ props.condition ? () =>{} : () =>{} }
			checked={props.checked_star === 4 ? true : false}   
			
		/>
		<label htmlFor={props.keys[1]} title="Pretty Good!">4 stars</label>

		<input type={props.type}
			id={props.keys[2]}
			key={props.keys[2]}
			name="rating" 
			value="3" 
			onClick={props.onClick} 
			readOnly={props.condition}  
			onChange={ props.condition ? () =>{} : () =>{} }
			checked={props.checked_star === 3 ? true : false} 
		/>
		<label htmlFor={props.keys[2]} title="Meh!">3 stars</label>

		<input 
			type={props.type} 
			id={props.keys[3]}
			key={props.keys[3]}
			name="rating" 
			value="2" 
			onClick={props.onClick}
			readOnly={props.condition}
			onChange={ props.condition ? () =>{} : () =>{} }
			checked={props.checked_star === 2 ? true : false} 
		/>
		<label htmlFor={props.keys[3]} title="Kinda Bad">2 stars</label>

		<input type={props.type} 
			id={props.keys[4]} 
			name="rating"
			key={props.keys[4]} 
			value="1"  
			onClick={props.onClick} 
			readOnly={props.condition}  
			onChange={ props.condition ? () =>{} : () =>{} }
			checked={props.checked_star === 1 ? true : false} //this is just to fulfill react api requirement 
		/>
		<label htmlFor={props.keys[4]} title="Sucks big time"> 1 star</label>

     </div>

);

}
export default Stars;