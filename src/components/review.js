import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { postReview } from '../actions/index';
import { Link } from 'react-router';

class Review extends Component {

	static contextTypes = {
    	router: PropTypes.object
    };

    onSubmit(props) {

    	console.log(props);
    this.props.postReview(props);
	    //.then(() => {
	        // review  has been created, navigate the user to the index
	        // We navigate by calling this.context.router.push with the
	        // new path to navigate to.
	      //  this.context.router.push('/');
	    //});
	    this.context.router.push('/');
    }

	render(){
		const { fields: { name, rating, comment }, handleSubmit } = this.props;
	return (
	    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
	        <h3>Write a Review</h3>

	        <div className={`form-group ${name.touched && name.invalid ? 'has-danger' : ''}`}>
	          <label>Name</label>
	          <input type="text" className="form-control" {...name} />
	          <div className="text-help">
	            {name.touched ? name.error : ''}
	          </div>
	        </div>

	        <div className={`form-group ${rating.touched && rating.invalid ? 'has-danger' : ''}`}>
	          <label>Rating</label>
	          <input type="text" className="form-control" {...rating} />
	          <div className="text-help">
	            {rating.touched ? rating.error : ''}
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
	    </form>
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



// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'ReviewsNewForm',
  fields: ['name', 'rating', 'comment'],
  validate
}, null, { postReview })(Review);
