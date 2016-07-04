import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

import Review from './review';

class RestaurantDetails  extends Component{
	//console.log("data : "+Object.keys(props));
    constructor(props){
    	super(props);
    	//this.state ={restaurant : {}}
    	this.loadReviews = this.loadReviews.bind(this);
    }

	componentWillMount(){
		this.props.fetchRestaurant(this.props.params.id);
	}

	componentDidMount(){
		//this.setState({ restaurant: this.props.restaurant });
	}

	loadReviews = (reviews) => {
           
            var results = [];
            console.log("we have ..."+ reviews);
            reviews.forEach((review) => {
                 
                results.push(
                    <Review 
                    key={review.id}
                    name={review.name}
                    rating={review.rating}
                    comment={review.comment}
                    date={review.date}
                    /> 

                );

            });
           
            return results;
        }


	//to do: display reviews from rawData
    render(){
    	var path = `restaurants/${this.props.params.id}/reviews/new`;
    	console.log("are we getting this ? : "+ this.props.restaurants);
    	//var restaurant = this.props.fetchRestaurant(this.props.params.id);
    	var reviews = this.loadReviews(this.props.restaurant.reviews);
		return (
			
			<div >
				<div className="col-xs-4 col-sm-4">
					<Link to={path} className="btn btn-default" >Write A Review </Link>
				</div>
                
                <div className="row">
				<div className="col-xs-4 col-sm-4">
                    <h2>{this.props.restaurant.name}</h2>
			        <p>{this.props.restaurant.image}</p>
			        <p>Address: {this.props.restaurant.address}</p>
			        <p>Type: {this.props.restaurant.cuisineType}</p>
			        <Link to="/"> Back</Link>

			    </div>

			    <div className="">
			    {reviews}
			    </div>

			    </div>

		    </div>
		  
		);
    }

}

function mapStateToProps(state) {
	//console.log("app state : "+Object.keys(state.appState));
	//console.log("restaurants : "+ state.appState.restaurants)
	console.log("restaurant from state: "+ state.appState.restaurant)
	return { restaurant : state.appState.restaurant };
}
export default connect(mapStateToProps,actions)(RestaurantDetails);
