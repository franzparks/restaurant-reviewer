import React from 'react';

const Menu = () => {
	return (
	    <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
			<div className="list-group">
			    <a href="#" className="list-group-item active">All</a>
			    <a href="#" className="list-group-item">Highest Rated</a>
			    <a href="#" className="list-group-item">Most Reviewed</a>
			    <a href="#" className="list-group-item">Open Now</a>           
			</div>
		</div>
	);	
}

export default Menu;