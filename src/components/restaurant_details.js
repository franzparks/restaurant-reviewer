import React,{Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';
import Stars from './stars';

import Restaurant from './restaurant';

import {
    getAverageRating,
    getNumberOfRatings,
    loadReviews
} from '../utils/utils';

class RestaurantDetails  extends Component{
	
    constructor(props){
    	super(props);
        this.renderRestaurant = this.renderRestaurant.bind(this);
    }

    componentWillMount() {
        this.props.fetchRestaurant(this.props.params.id);

    }


    renderRestaurant(restaurants,path){

        return restaurants.map((restaurant) => {
           
           var reviews = loadReviews(restaurant.reviews);
            
            return (

                <div className="row" key={Math.random() * 100000}>
                    
                <div className="col-xs-12 col-lg-6 ">

                    <div className="row">
                        <h4>{restaurant.name}</h4>
                        <p>
                        <img src={restaurant.image} 
                        className="img-responsive" 
                        alt="Image of restaurant cuisine type">
                        </img>
                        </p>

                        <div aria-label="Average Rating" className="flex-container">
                            <Stars 
                                key={Math.random() * 10000}
                                style={'rating'}
                                condition={false}
                                checked_star={getAverageRating(restaurant.reviews)} 
                                type={'checkbox'}
                                keys={[
                                    this.props.key ,this.props.key,this.props.key,
                                    this.props.key,this.props.key
                                ]}
                            />
                            <div className="number-of-reviews">
                                {getNumberOfRatings(restaurant.reviews)} Reviews
                            </div>
                        </div>

                    </div>
                        
                    <div className="row">

                        <div aria-label="Cuisine Type" className="flex-item">
                            <strong>Cuisine Type:</strong>  {restaurant.cuisineType}
                        </div>

                        <div aria-label="Address" className="flex-item">
                            <strong>Address:</strong>  {restaurant.address}
                        </div>

                        <div aria-label="Hours Open" className="flex-item">
                            <strong>Hours Open:</strong>  {restaurant.operatingHours.open} AM to        
                            {restaurant.operatingHours.close } PM
                        </div>

                        <div className="flex-item">

                        <Link to="/" 
                            className="btn btn-primary  extra-margin-bottom ">
                             Back
                        </Link>

                        </div>

                    </div>

                </div>

                 <div className="col-xs-12 col-lg-6 flex-item" >

                    <Link to={path} className="btn btn-primary " >Write A Review </Link>
                      
                </div>

                <div>
                  {reviews}
                </div>

            </div>

            );
        });

    }


    render(){

    	var path = `${this.props.params.id}/reviews/new`;
     
		return (
            <div>
            
                {this.renderRestaurant(this.props.restaurant,path)}  

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
