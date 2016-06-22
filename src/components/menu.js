import React from 'react';

const Menu = (props) => {
	var selected = false;
	handleClick = function(selection){
        //props.handleSelection(selection);
        selected = true;
	}
	return (
		var style = {selected} ? : "list-group-item active" : "list-group-item";

	    <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">

			<div className="list-group">
			    <a href="#" className="list-group-item active" onClick={handleClick('all').bind(this)}>All</a>
			    <a href="#" className="list-group-item">Highest Rated</a>
			    <a href="#" className="list-group-item">Most Reviewed</a>
			    <a href="#" className="list-group-item">Open Now</a>           
			</div>
		</div>
	);	
}

export default Menu;