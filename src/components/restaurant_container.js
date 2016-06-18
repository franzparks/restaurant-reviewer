import React, {Component} from 'react';
import Restaurant from './restaurant';
//import {connect} from 'react-redux';

class RestaurantContainer extends Component {
    
    render() { 
        return (
                <div className="row">
                     <Restaurant />   
                </div>
        ); 
    }     
}

export default RestaurantContainer;