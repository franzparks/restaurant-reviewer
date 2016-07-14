import React, {Component} from 'react';
import * as $ from 'jquery/dist/jquery';

class ToggleNav extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount() {

      //this.refs.toggleInput.getDOMNode().bootstrapToggle();
      //$('.toggleInput').bootstrapToggle();

    }

    componentDidUpdate(){
    	//$('.toggleInput').bootstrapToggle();
    }

	render(){
		return (
			<p className="pull-right visible-xs">
			    <button className="toggleInput" className="btn btn-primary btn-xs" 
			    	data-toggle="offcanvas" data-on="On" data-off="Off">
			        Toggle nav
			    </button>
			</p>
		);
    }
}

export default ToggleNav;