import React, {Component} from 'react';
import { Link } from 'react-router';
import Overview from './overview';
import Restaurant from './restaurant';

class RestaurantList extends Component {
   
    constructor(props){
    	super(props);
    }

    renderList() {
	    return this.props.restaurants.map((restaurant) => {
	   
	        <Restaurant
	          key={restaurant.id}
	          //onClick={() => this.props.selectBook(book)}
	          name={restaurant.name}
	        </Restaurant>
	      );
	    });
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