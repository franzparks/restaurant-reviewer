import React, {Component} from 'react';
import {connect} from 'react-redux';

export default class RestaurantContainer extends Component {
	render(){
        return (
        <div className="nav">
        	<ul className="list-group">
        	   <li className="list-group-item">First Restaurant </li>
        	   <li className="list-group-item"> Second Restaurant </li>  
        	</ul>
        </div>
        );
	}
}