import React, {Component} from 'react';
import Restaurant from './restaurant';

const RestaurantContainer = (props) => {
    
        var results = [];
        var filter = props.filterText;

        props.restaurants.forEach((restaurant) => {
            console.log(" restaurant : "+restaurant);
            if((restaurant.name).indexOf(filter) !== -1 || 
                (restaurant.address).indexOf(filter) !== -1 ||
                (restaurant.cuisineType).indexOf(filter) !== -1)

                results.push(
                    <Restaurant 
                    key={restaurant.name}
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