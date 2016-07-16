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
        console.log("componentWillUnMount");
        this.props.fetchRestaurant(this.props.params.id); //this.props.params.id
        //this.context.router.push('/restaurants/2');

    }


    renderRestaurant(restaurants){

        return restaurants.map((restaurant) => {
            
            return (

                <Restaurant 
                key={Math.random() * 100000}
                id={restaurant.id }
                data={restaurant}
                //handleClick={boundClick}
                name={restaurant.name}
                image={restaurant.image}
                address={restaurant.address}
                cuisineType={restaurant.cuisineType}
                hours={restaurant.operatingHours}
                averageRating={restaurant.averageRating}
                numberOfRatings={restaurant.numberOfRatings}
                checked_star={restaurant.averageRating}
                type={'checkbox'}
                />

            );
        });

    }


    render(){
        //console.log("got rest :"+ this.props.restaurant);
    	//var path = `restaurants/${this.props.params.id}/reviews/new`;
    	//var reviews = loadReviews(this.props.restaurant.reviews);


            //{console.log(Object.keys(this.props.restaurant))}
            //var rest = {};
            //rest = renderRestaurant(this.props.restaurant);
        

		return (
            <div>
            <div>{this.renderRestaurant(this.props.restaurant)}</div>
            {/*<div className="row">
                    
                <div className="col-xs-12 col-lg-6 ">

                    <div className="row">
                        <h4>{this.props.restaurant.name}</h4>
                        <p>
                        <img src={this.props.restaurant.image} 
                        className="img-responsive" 
                        alt="Image of restaurant cuisine type">
                        </img>
                        </p>

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
                            <div className="number-of-reviews">
                                {getNumberOfRatings(this.props.restaurant.reviews)} Reviews
                            </div>
                        </div>

                    </div>
                        
                    <div className="row">

                        <div aria-label="Cuisine Type" className="flex-item">
                            <strong>Cuisine Type:</strong>  {this.props.restaurant.cuisineType}
                        </div>

                        <div aria-label="Address" className="flex-item">
                            <strong>Address:</strong>  {this.props.restaurant.address}
                        </div>

                        <div aria-label="Hours Open" className="flex-item">
                            <strong>Hours Open:</strong>  {this.props.restaurant.operatingHours.open} AM to        
                            {this.props.restaurant.operatingHours.close } PM
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

            

            </div> */}
            

		  </div>
		);
    }

}

function mapStateToProps(state) {
	console.log("anything ? "+state.appState.restaurant);
	return { 
        restaurant : state.appState.restaurant, 
        key : state.appState.keyGen 
    };
}


export default connect(mapStateToProps,actions)(RestaurantDetails);
