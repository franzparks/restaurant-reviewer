import React, {Component} from 'react';
import Restaurant from './restaurant';
//import {connect} from 'react-redux';

const RestaurantContainer = (props) => {
    
        var results = [];

        props.restaurants.forEach((restaurant) => {
             results.push(<Restaurant key={restaurant.name}/> );
        });

        return (
                <div className="row">
                      {results} 
                </div>
        );     
}

export default RestaurantContainer;