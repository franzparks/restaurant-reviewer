import React from 'react';

const ToggleNav = () => {
	return (
		<p className="pull-right visible-xs " id="some">
		    <button  className="btn btn-primary btn-xs" data-toggle="offcanvas" data-on="On" data-off="Off">
		        Toggle nav
		    </button>
		</p>
	);
}

export default ToggleNav;