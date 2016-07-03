import React from 'react';
import FontAwesome from 'react-fontawesome';

const Stars = (props) => {

return (

	<div className="rating">
      <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
      <input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5" title="Rocks!">5 stars</label>
     </div>
);

}
export default Stars;