import React from 'react';

const Menu = (props) => {
	var selected = false;
	var style = "list-group-item active";
	var handleClick = function(selection){
        props.handleSelection(selection);
        //selected = true;
        //style = "list-group-item active";
        //console.log(selected);
	}

	return (
		

	    <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">

			<div className="list-group">
			    <a href="#" className={style} onClick={handleClick('all')} >All</a>
			    <a href="#" className="list-group-item" onClick={handleClick('highestRated')}>Highest Rated</a>
			    <a href="#" className="list-group-item" onClick={handleClick('mostReviewed')}>Most Reviewed</a>
			    <a href="#" className="list-group-item" onClick={handleClick('openNow')}>Open Now</a>           
			</div>
		</div>
	);	
}

export default Menu;