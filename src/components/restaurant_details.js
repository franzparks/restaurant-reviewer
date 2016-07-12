import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';
import Stars from './stars';

import {
    getAverageRating,
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

				<div className="col-xs-4 col-sm-4">
                    <h2>{this.props.restaurant.name}</h2>

			        <p>
                    <img src={this.props.restaurant.image} 
                    className="img-responsive" 
                    alt="Image of restaurant cuisine type">
                
                    </img>
                    </p>
                    <div aria-label="Average Rating">
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
                    </div>
                    
                    <div className="row" />
			        <Link to="/" className="btn btn-primary"> Back</Link>

			    </div>

                <div className="col-xs-4 col-sm-4">
                    <p aria-label="Cuisine Type"><strong>Cuisine Type:</strong> 
                        {this.props.restaurant.cuisineType}
                    </p>
                    <p aria-label="Address"><strong>Address:</strong>
                        {this.props.restaurant.address}
                    </p>
                    <p aria-label="Hours Open"><strong>Hours Open:</strong>  
                        {this.props.restaurant.operatingHours.open} to  
                         
                        {this.props.restaurant.operatingHours.close }
                    </p>
                </div>

                <div className="col-xs-2 col-sm-2">
                    <Link to={path} className="btn btn-primary" >Write A Review </Link>
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
	
	return { 
        restaurant : state.appState.restaurant, 
        key : state.appState.keyGen 
    };
}


export default connect(mapStateToProps,actions)(RestaurantDetails);
