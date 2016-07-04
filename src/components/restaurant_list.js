import React, {Component} from 'react';
import { Link } from 'react-router';
import Overview from './overview';
import Restaurant from './restaurant';

class RestaurantList extends Component {
   
    constructor(props){
    	super(props);
    }

	render(){
		return (
	    	<div>
	    	{/*<Overview /> */}
	    	{props.restaurant_components}
	    	</div>

	    );
    }

}
export default RestaurantList;