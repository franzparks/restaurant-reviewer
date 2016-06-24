import React, {Component} from 'react';
import Restaurant from './restaurant';

class RestaurantContainer  extends Component {

     
        constructor(props) {
        super(props);
        this.state = {
            //results : [], 
            filter : props.filterText,
            filterCategory: props.filterCategory,
            //restaurants : props.restaurants
        };
        
        this.sortByHighestRated = this.sortByHighestRated.bind(this);
        this.sortByMostReviewed = this.sortByMostReviewed.bind(this);
        this.sortResults       = this.sortResults.bind(this);

        }

        componentDidMount() {
        //console.log("am here :"+this.state.restaurants);
        //  this.loadData([{"name":"hello","reviews":[]}]);
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
                          {this.props.restaurants} 
                    </div>
            ); 
        }    
}

export default RestaurantContainer;