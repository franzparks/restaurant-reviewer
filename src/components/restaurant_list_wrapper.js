 import React,{Component} from 'react'
 import RestaurantList from './restaurant_list';

 class RestaurantListWrapper extends Component {

 	constructor(props){
 		super(props);
 		
 	}
 	
 	render(){
 		{console.log("here .. "+Object.keys(this.props.params))}
 		{console.log("here 2 .. "+this.props.route.component)}
 	return (
 		<div>
 		
 		<RestaurantList restaurants={this.props.restaurants} />
 	
 		</div>
 	);
 }
 }
 export default RestaurantListWrapper;