 import React,{Component} from 'react'
 import RestaurantList from './restaurant_list';

 class RestaurantListWrapper extends Component {

 	constructor(props){
 		super(props);
 		
 	}
 	
 	render(){
 		
 	return (
 		<div>
 		
 		<RestaurantList restaurants={this.props.restaurant_components} />
 	
 		</div>
 	);
 }
 }
 export default RestaurantListWrapper;