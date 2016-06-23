import React, {Component} from 'react';
import Restaurant from './restaurant';

const RestaurantContainer = (props) => {
    
        var results = [];
        var filter = props.filterText;
        
        var getAverageRating = function(restaurant){
            if(restaurant.reviews.length > 1){
                var sum = restaurant.reviews.reduce( (prev,curr) => prev + curr );
                return sum / restaurant.reviews.length;
            }else
                return 0; 
        }

        props.restaurants.forEach((restaurant) => {
            //console.log(" restaurant : "+restaurant);
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
                    averageRating = {getAverageRating(restaurant)}
                    numberOfRatings={getNumberOfRatings(restaurant)}

                    /> 

            );
            console.log("results : "+Object.keys(results[0].props));
        });

        return (
                <div className="row">
                      {results} 
                </div>
        );     
}

export default RestaurantContainer;