import React, {Component} from 'react';


class RestaurantContainer  extends Component {

     
        constructor(props) {
        super(props);
        this.state = {
            //restaurants : [], 
            filter : props.filterText,
            filterCategory: props.filterCategory,
            restaurants : props.restaurants
        };
        
        this.sortByHighestRated = this.sortByHighestRated.bind(this);
        this.sortByMostReviewed = this.sortByMostReviewed.bind(this);
        this.sortResults       = this.sortResults.bind(this);

        }

        componentDidMount() {
           // this.setState({ restaurants : this.props.restaurants});
        }

        
        render(){
            //console.log("restaurants : "+ this.props.restaurants);

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