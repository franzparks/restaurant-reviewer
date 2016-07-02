import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { postReview } from '../actions/index';
import { Link } from 'react-router';

class Review extends Component {

	static contextTypes = {
    	router: PropTypes.object
    };

    onSubmit(props) {
    this.props.postReview(props)
	    .then(() => {
	        // review  has been created, navigate the user to the index
	        // We navigate by calling this.context.router.push with the
	        // new path to navigate to.
	        this.context.router.push('/');
	    });
    }

	render(){
	return (
    <div> Write a review </div>
	);
    }
}

export default Review;