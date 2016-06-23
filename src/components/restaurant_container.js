import React, {Component} from 'react';
import Restaurant from './restaurant';

const RestaurantContainer = (props) => {
    
        var results = [];
        var filter = props.filterText;

        var getAverageRating = (restaurant) => {
            if(restaurant.reviews.length > 1){
                var sum = restaurant.reviews.reduce( (prev,curr) => prev + curr );
                return sum / restaurant.reviews.length;
            }else
                return 0; 
        }

        var getNumberOfRatings = (restaurant) => {
            return restaurant.reviews.length;
        }

        var sortByHighestRated = (results,restaurant) => {
            return sortResults(results, restaurant.props.averageRating);
        }

        var sortByMostReviewed = (results, restaurant) => {
            return sortResults(results, restaurant.props.numberOfRatings);
        }

        var sortResults = (arr, param) => {
            arr.sort((a,b) => {
                return a[param] > b[param];
            });
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

        if(props.filterCategory){
            if(props.filterCategory === 'all'){
                /* Do nothing */
            }

        }

        return (
                <div className="row">
                      {results} 
                </div>
        );     
}

export default RestaurantContainer;