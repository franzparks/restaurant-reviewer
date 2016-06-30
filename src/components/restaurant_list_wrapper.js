 import React,{Component} from 'react'
 import RestaurantList from './restaurant_list';

 class RestaurantListWrapper extends Component {

 	constructor(props){
 		super(props);
 		
 	}
 	
 	render(){
 		
 	return (
 		<div>
 		
 		<RestaurantList restaurants={this.props.restaurants} />
 	
 		</div>
 	);
 }
 }
 export default RestaurantListWrapper;