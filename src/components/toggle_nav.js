import React, {Component} from 'react';
import ButtonGroup, {DropdownButton,MenuItem, Button} from 'react-bootstrap';
import SampleMenu from './menu_sample';
import * as $ from 'jquery/dist/jquery';

import Menu from './menu';

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

			<div className="visible-xs" >
			    
			    <SampleMenu />
			</div>
           
		);
    }
}

export default ToggleNav;