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

			<div>
			<p className="pull-right visible-xs">
			    <button  className="btn btn-primary btn-xs dropdown-toggle" 
			    	data-toggle="offcanvas" >
			        Toggle nav
			    </button>
			</p>

			</div>
		);
    }
}

export default ToggleNav;