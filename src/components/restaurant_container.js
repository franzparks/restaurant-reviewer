import React, {Component} from 'react';
import Restaurant from './restaurant';

class RestaurantContainer  extends Component {

        //this.state = {resultsq : []};
     
        constructor(props) {
        super(props);
        this.state = {results : [], filter : props.filterText};
        this.getAverageRating = this.getAverageRating.bind(this);
        this.getNumberOfRatings = this.getNumberOfRatings.bind(this);
        this.sortByHighestRated = this.sortByHighestRated.bind(this);
        this.sortByMostReviewed = this.sortByMostReviewed.bind(this);
        this.sortResults       = this.sortResults.bind(this);
        }

        //var results = [];
        //var filter = props.filterText;

        getAverageRating = function(restaurant){
            if(restaurant.reviews.length > 1){
                var sum = restaurant.reviews.reduce( (prev,curr) => prev + curr );
                return sum / restaurant.reviews.length;
            }else
                return 0; 
        }

        getNumberOfRatings = (restaurant) => {
            return restaurant.reviews.length;
        }

        sortByHighestRated = (results,restaurant) => {
            return this.sortResults(results, restaurant.props.averageRating);
        }

        sortByMostReviewed = (results, restaurant) => {
            return this.sortResults(results, restaurant.props.numberOfRatings);
        }

        sortResults = (arr, param) => {
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
                    averageRating = {this.getAverageRating(restaurant)}
                    numberOfRatings={this.getNumberOfRatings(restaurant)}

                    /> 

            );

        });


        if(props.filterCategory){
            console.log("results : "+results[2].props.averageRating);
            if(props.filterCategory === 'all'){
                /* Do nothing */
            }else{
                if(props.filterCategory === 'highestRated' && results.length > 2){
                    this.sortByHighestRated(results,results[0]);
                }else if(props.filterCategory === 'mostReviewed' && results.length > 2){
                    this.sortByMostReviewed(results, results[0]);
                }

            }

        }
        render(){
            return (
                    <div className="row">
                          {results} 
                    </div>
            ); 
        }    
}

export default RestaurantContainer;