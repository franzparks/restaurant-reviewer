import React from 'react';


const RestaurantContainer = (props) =>  {

    return (
        <div className="row">
              {props.restaurants} 
        </div>
    );     
}
export default RestaurantContainer;