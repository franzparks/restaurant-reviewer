import React from 'react';
import FontAwesome from 'react-fontawesome';

const Stars = (props) => {

return (

	<div className="rating">
		<input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5" title="Rocks!">5 stars</label>
		<input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4" title="Pretty Good!">4 stars</label>
		<input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3" title="Meh!">3 stars</label>
		<input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2" title="Kinda Bad">2 stars</label>
		<input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1" title="Sucks big time">1 star</label>
		<br />
     </div>

);

}
export default Stars;