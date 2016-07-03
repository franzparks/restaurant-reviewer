import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { postReview } from '../actions/index';
import { Link } from 'react-router';
import Stars from './stars';

class Review extends Component {

	static contextTypes = {
    	router: PropTypes.object
    };

    onSubmit(props) {

    this.props.postReview({ ...props, id: this.props.id, date: Date.now() });
	    //.then(() => {
	        // review  has been created, navigate the user to the index
	        // We navigate by calling this.context.router.push with the
	        // new path to navigate to.
	      //  this.context.router.push('/');
	    //});
	    this.context.router.push('/');
    }

	render(){
		//console.log(Object.keys(this.props));
		//console.log(" id : "+this.props.id);
		const { fields: { name, rating, comment }, handleSubmit } = this.props;
	return (
		<div>
		<Stars />

	    {/*<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
	        <h3>Write a Review</h3>
          

	        <div className={`form-group ${name.touched && name.invalid ? 'has-danger' : ''}`}>
	          <label>Name</label>
	          <input type="text" className="form-control" {...name} />
	          <div className="text-help">
	            {name.touched ? name.error : ''}
	          </div>
	        </div>

	        <div className={`form-group ${comment.touched && comment.invalid ? 'has-danger' : ''}`}>
	          <label>Comment</label>
	          <textarea className="form-control" {...comment} />
	          <div className="text-help">
	            {comment.touched ? comment.error : ''}
	          </div>
	        </div>

	        <button type="submit" className="btn btn-primary">Submit</button>
	        <Link to="/" className="btn btn-danger">Cancel</Link>
	    </form> */}
	    </div>
	);
    }
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Enter a reviewer\'s name';
  }
  if (!values.rating) {
    errors.rating = 'Enter a rating';
  }
  if(!values.comment) {
    errors.comment = 'Enter a review';
  }

  return errors;
}

function mapStateToProps(state) {
	//console.log("app state : "+Object.keys(state.appState));
	//console.log("restaurants : "+ state.appState.restaurants)
	console.log("restaurant : "+ state.appState.restaurant)
	return { id : state.appState.restaurant.id };
}



// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'ReviewsNewForm',
  fields: ['name', 'rating', 'comment'],
  validate
}, mapStateToProps, { postReview })(Review);
