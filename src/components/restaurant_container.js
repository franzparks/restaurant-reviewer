import React, {Component} from 'react';
import RestaurantList from './restaurant_list';

class RestaurantContainer extends Component  {
    
    constructor(props){
    	super(props);
    }
    render(){
    return (
        <div className="row">
            <div> Container </div>
         	{this.props.children}  
        </div>
    ); 
    }    
}
export default RestaurantContainer;