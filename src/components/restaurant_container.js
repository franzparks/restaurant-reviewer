import React from 'react';


const RestaurantContainer = (props) =>  {

    return (
        <div className="row">
        	<RestaurantList restuarants={props.restaurants} />
         	{props.children}  
        </div>
    );     
}
export default RestaurantContainer;