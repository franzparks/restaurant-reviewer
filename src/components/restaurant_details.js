import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

import Review from './review';

class RestaurantDetails  extends Component{
	
    constructor(props){
    	super(props);
   
    	this.loadReviews = this.loadReviews.bind(this);
    }

	loadReviews = (reviews) => {
           
            var results = [];
        
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


    render(){

    	var path = `restaurants/${this.props.params.id}/reviews/new`;
    	var reviews = this.loadReviews(this.props.restaurant.reviews);

		return (
			
			<div className="row">
				
                <div className="row">

				<div className="col-xs-4 col-sm-6">
                    <h2>{this.props.restaurant.name}</h2>

			        <p>
                    <img src={this.props.restaurant.image} 
                    className="img-responsive" 
                    alt="Image of restaurant cuisine type">
                
                    </img>
                    </p>
                
                    <p aria-label="Cuisine Type">Cuisine Type: {this.props.restaurant.cuisineType}</p>
			        <p aria-label="Address">Address: {this.props.restaurant.address}</p>
			        <Link to="/"> Back</Link>

			    </div>

                <div className="col-xs-4 col-sm-6">
                    <Link to={path} className="btn btn-default" >Write A Review </Link>
                </div>

			    <div >
			    {reviews}
			    </div>

			    </div>



		    </div>
		  
		);
    }

}

function mapStateToProps(state) {
	
	return { restaurant : state.appState.restaurant };
}


export default connect(mapStateToProps,actions)(RestaurantDetails);
