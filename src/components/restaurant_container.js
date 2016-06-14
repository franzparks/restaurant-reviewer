import React, {Component} from 'react';
import {connect} from 'react-redux';

export default class RestaurantContainer extends Component {
	render(){
        return (
        <div className="nav">
        	<ul>
        	   <li>First Restaurant </li>
        	   <li> Second Restaurant </li>  
        	</ul>
        </div>
        );
	}
}