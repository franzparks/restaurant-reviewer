import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';
import Stars from './stars';

import {
    getAverageRating,
    getNumberOfRatings,
    loadReviews
} from '../utils/utils';

class RestaurantDetails  extends Component{
	
    constructor(props){
    	super(props);
    }


    render(){

    	var path = `restaurants/${this.props.params.id}/reviews/new`;
    	var reviews = loadReviews(this.props.restaurant.reviews);

		return (
			
			<div>
				
                <div className="row">

				<div className="col-xs-6 col-lg-6">
                    <h2>{this.props.restaurant.name}</h2>

			        <div>

                    <img src={this.props.restaurant.image} 
                    className="img-responsive" 
                    alt="Image of restaurant cuisine type">
                    </img>

                    </div>

                    <div aria-label="Average Rating" className="flex-container">
                        <Stars 
                            key={Math.random() * 10000}
                            style={'rating'}
                            condition={false}
                            checked_star={getAverageRating(this.props.restaurant.reviews)} 
                            type={'checkbox'}
                            keys={[
                                this.props.key ,this.props.key,this.props.key,
                                this.props.key,this.props.key
                            ]}
                        />
                        <div className="flex-item">
                            {getNumberOfRatings(this.props.restaurant.reviews)} Reviews
                        </div>
                    </div>
                    
                    <div className="row" />
			        <Link to="/" className="btn btn-primary"> Back</Link>

			    </div>

                <div className="col-sm-6 col-lg-6">

                    <div className="flex-item">

                    <Link to={path} className="btn btn-primary" >Write A Review </Link>

                    </div>

                    <div className="flex-item">

                    <div aria-label="Cuisine Type"><strong>Cuisine Type:</strong> 
                        {this.props.restaurant.cuisineType}
                    </div>
                    <div aria-label="Address"><strong>Address:</strong>
                        {this.props.restaurant.address}
                    </div>
                    <div aria-label="Hours Open"><strong>Hours Open:</strong>  
                        {this.props.restaurant.operatingHours.open} AM to  
                         
                        {this.props.restaurant.operatingHours.close } PM
                    </div>

                    </div>
                
                    

                </div>

			    <div className="col-sm-6 col-sm-6">
			    {reviews}
			    </div>

			    </div>



		    </div>
		  
		);
    }

}

function mapStateToProps(state) {
	
	return { 
        restaurant : state.appState.restaurant, 
        key : state.appState.keyGen 
    };
}


export default connect(mapStateToProps,actions)(RestaurantDetails);
