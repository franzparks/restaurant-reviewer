import React from 'react';

const Stars = (props) => {

return (
	
	<div>
	<h1 style="margin: 0">Hover Me</h1>

	<span className="rating">
  <span className="star" title="5 - I love it"></span>
  <span className="star" title="4 - I really like it"></span>
  <span className="star" title="3 - I like it"></span>
  <span className="star" title="2 - It&#39;s ok"></span>
  <span className="star" title="1 - Not for me"></span>
</span>
	</div>
	
);

}
export default Stars;