import React from 'react';


const RestaurantContainer = (props) =>  {

    return (
        <div className="row">
        	<RestaurantList restaurants={props.restaurants} />
         	{props.children}  
        </div>
    );     
}
export default RestaurantContainer;