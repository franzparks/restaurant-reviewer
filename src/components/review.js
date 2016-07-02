import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { postReview } from '../actions/index';
import { Link } from 'react-router';

class Review extends Component {

	static contextTypes = {
    	router: PropTypes.object
    };

	render(){
	return (
    <div> Write a review </div>
	);
    }
}

export default Review;