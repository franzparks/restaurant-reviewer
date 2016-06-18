import React from 'react';

const Menu = () => {
	return (
	    <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
			<div className="list-group">
			    <a href="#" className="list-group-item active">By Location</a>
			    <a href="#" className="list-group-item">By Cuisine</a>
			    <a href="#" className="list-group-item">By Ratings</a>           
			</div>
		</div>
	);	
}

export default Menu;