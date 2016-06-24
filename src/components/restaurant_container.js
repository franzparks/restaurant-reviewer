import React, {Component} from 'react';
import Restaurant from './restaurant';

class RestaurantContainer  extends Component {

     
        constructor(props) {
        super(props);
        this.state = {
            results : [], 
            filter : props.filterText,
            filterCategory: props.filterCategory,
            restaurants : props.restaurants
        };
        this.getAverageRating = this.getAverageRating.bind(this);
        this.getNumberOfRatings = this.getNumberOfRatings.bind(this);
        this.sortByHighestRated = this.sortByHighestRated.bind(this);
        this.sortByMostReviewed = this.sortByMostReviewed.bind(this);
        this.sortResults       = this.sortResults.bind(this);
        this.loadData          = this.loadData.bind(this);

        }

        componentDidMount() {
        console.log("am here :"+this.state.restaurants);
          this.loadData([{"name":"hello","reviews":[]}]);
        }

        loadData = (data) => {
           console.log("I got called : "+data);
            data.forEach((restaurant) => {
                //console.log(" restaurant : "+restaurant);     
                this.state.results.push(
                    <Restaurant 
                    key={restaurant.name + Math.random()*10000}
                    name={restaurant.name}
                    image={restaurant.image}
                    address={restaurant.address}
                    cuisineType={restaurant.cuisineType}
                    averageRating = {this.getAverageRating(restaurant)}
                    numberOfRatings={this.getNumberOfRatings(restaurant)}

                    /> 

                );

            });
        }

        getAverageRating = (restaurant) => {
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

        
        render(){


            if(this.state.filterCategory){
                ///console.log("results : "+results[2].props.averageRating);
                if(filterCategory === 'all'){
                    /* Do nothing */
                }else{
                    if(this.state.filterCategory === 'highestRated' && results.length > 2){
                        //this.sortByHighestRated(results,results[0]);
                    }else if(this.state.filterCategory === 'mostReviewed' && results.length > 2){
                        //this.sortByMostReviewed(results, results[0]);
                    }

                }

            }

            return (
                    <div className="row">
                          {this.state.results} 
                    </div>
            ); 
        }    
}

export default RestaurantContainer;