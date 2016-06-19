import React, {Component} from 'react';
import Restaurant from './restaurant';

const RestaurantContainer = (props) => {
    
        var results = [];

        props.restaurants.forEach((restaurant) => {
             results.push(<Restaurant key={restaurant.name}
                name={restaurant.name}
                image={restaurant.image}
                address={restaurant.address}
                cuisineType={restaurant.cuisineType}
                /> 
             );
        });

        return (
                <div className="row">
                      {results} 
                </div>
        );     
}

export default RestaurantContainer;