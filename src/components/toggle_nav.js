import React, {Component} from 'react';

class ToggleNav extends Component {

	componentDidMount() {

      $( this.refs.toggleInput.getDOMNode() ).bootstrapToggle();

    }

	render(){
		return (
			<p className="pull-right visible-xs">
			    <button  ref="toggleInput" className="btn btn-primary btn-xs" 
			    	data-toggle="offcanvas" data-on="On" data-off="Off">
			        Toggle nav
			    </button>
			</p>
		);
    }
}

export default ToggleNav;