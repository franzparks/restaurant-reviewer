import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import { Link } from 'react-router';

class RestaurantDetails  extends Component{
	//console.log("data : "+Object.keys(props));
    constructor(props){
    	super(props);
    	this.state ={restaurant : {}}
    }

	componentWillMount(){
		this.props.fetchRestaurant(this.props.params.id);
	}

	componentDidMount(){
		this.setState({ restaurant: this.props.restaurant });
	}


	//to do: display reviews from rawData
    render(){
    	
		return (
			
			<div>
				<div className="col-xs-6 col-lg-4">
					<Link to="restaurant/review" className="btn btn-default" >Write A Review </Link>
				</div>
				<div className="col-xs-6 col-lg-4">
			       
                    <h2>{this.state.restaurant.name}</h2>
			        <p>{this.state.restaurant.image}</p>
			        <p>Address: {this.state.restaurant.address}</p>
			        <p>Type: {this.state.restaurant.cuisineType}</p>
			        <Link to="/"> Back</Link>

			    </div>
		    </div>
		  
		);
    }

}

function mapStateToProps(state) {
	//console.log("app state : "+Object.keys(state.appState));
	//console.log("restaurants : "+ state.appState.restaurants)
	//console.log("restaurant : "+ state.appState.restaurant)
	return { restaurant : state.appState.restaurant };
}
export default connect(mapStateToProps,actions)(RestaurantDetails);
