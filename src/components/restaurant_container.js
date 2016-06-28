import React from 'react';


const RestaurantContainer = (props) =>  {

    return (
        <div className="row">
         	{props.children}  
        </div>
    );     
}
export default RestaurantContainer;