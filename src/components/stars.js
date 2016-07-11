import React from 'react';
import FontAwesome from 'react-fontawesome';

const Stars = (props) => {

return (

	<div className={props.style} tabIndex="0">
		<input type="radio" id={props.keys[0]} name="rating" value="5" onClick={props.onClick}  readOnly={props.condition} key={props.keys[0]}/>
			<label htmlFor={props.keys[0]} title="Rocks!" >5 stars</label>

		<input type="radio" id={props.keys[1]}  name="rating" value="4" onClick={props.onClick}  readOnly={props.condition}  key={props.keys[1]}/>
			<label htmlFor={props.keys[1]} title="Pretty Good!">4 stars</label>

		<input type="radio" id={props.keys[2]} name="rating" value="3" onClick={props.onClick} readOnly={props.condition}  key={props.keys[2]}/>
			<label htmlFor={props.keys[2]} title="Meh!">3 stars</label>

		<input type="radio" id={props.keys[3]} name="rating" value="2" onClick={props.onClick} readOnly={props.condition} key={props.keys[3]} />
			<label htmlFor={props.keys[3]} title="Kinda Bad">2 stars</label>

		<input type="radio" 
			id={props.keys[4]} name="rating" 
			value="1" onClick={props.onClick} 
			readOnly={props.condition}
			onChange={ props.condition ? () =>{} : () =>{} }  
			key={props.keys[4]}
			checked={props.checked_star === '1' ? 'checked' : ''} //this is just to fulfill react api requirement 
		/>
			<label htmlFor={props.keys[4]} title="Sucks big time"> 1 star</label>

     </div>

);

}
export default Stars;