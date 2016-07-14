import React, {Component} from 'react';

class ToggleNav extends Component {
	render(){
		return (
			<p className="pull-right visible-xs">
			    <button  className="btn btn-primary btn-xs" 
			    	data-toggle="offcanvas" data-on="On" data-off="Off">
			        Toggle nav
			    </button>
			</p>
		);
    }
}

export default ToggleNav;