import React from 'react';
import RestaurantList from './restaurant_list';

const RestaurantContainer = (props) =>  {

    return (
        <div className="row">
         	{props.children}  
        </div>
    );     
}
export default RestaurantContainer;