import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { postReview } from '../actions/index';
import { Link } from 'react-router';
import Stars from './stars';

class Review extends Component {

	static contextTypes = {
    	router: PropTypes.object
    };

    constructor(props){
    	super(props);
        this.state = {
         rating : 0
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.getRating = this.getRating.bind(this);
    }

    onSubmit(props) {
  
   var restaurant = this.props.restaurant;
        restaurant.reviews = [ ...restaurant.reviews, 
        { id : (Math.random() * 10000) ,...props, 
        date: Date.now(),
        rating : this.state.rating }
        ]; 	
    
    this.props.postReview(restaurant);
	    //.then(() => {
	        // review  has been created, navigate the user to the index
	        // We navigate by calling this.context.router.push with the
	        // new path to navigate to.
	      //  this.context.router.push('/');
	    //});


	    this.context.router.push('/');
    }

    getRating (e){
      console.log(e.target);
    	this.setState( {rating: e.target.value});
    }
    

	render(){

	 const { fields: { name, comment },  handleSubmit } = this.props;

	return (

		<div>	

	    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
	        <h3>Write a Review</h3>
          <hr />
          
          <label htmlFor="ratings" className="form-group">Rate Restaurant</label>
          <div className="form-group">
            <Stars 
              onClick={this.getRating}
              id="ratings"
              key={Math.random() * 10000}
              style={'rating rating_edit'}
              condition={false} 
              checked={'checked'}
              keys={[Math.random() * 100000,Math.random() * 100000,Math.random() * 100000,Math.random() * 100000,Math.random() * 100000]}
            />
          </div>
          <br />
          <hr />

	        <div className={`form-group ${name.touched && name.invalid ? 'has-danger' : ''}`}>
	          <label htmlFor="name-input">Name</label>
	          <input type="text" className="form-control" {...name}  id="name-input"/>
	          <div className="text-danger">
	            {name.touched ? name.error : ''}
	          </div>
	        </div>

           <label htmlFor="comment">Comment</label>
	        <div className={`form-group ${comment.touched && comment.invalid ? 'has-danger' : ''}`}>
	          <textarea className="form-control" {...comment} id="comment"/>
	          <div className="text-danger">
	            {comment.touched ? comment.error : ''}
	          </div>
	        </div>

	        <button type="submit" className="btn btn-primary">Submit</button>
	        <Link to="/" className="btn btn-danger">Cancel</Link>
	    </form>
	    </div>
	);
    }
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Enter a reviewer\'s name';
  }
  
  if(!values.comment) {
    errors.comment = 'Enter a review';
  }

  return errors;
}

function mapStateToProps(state) {
	return { restaurant : state.appState.restaurant };
}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'ReviewsNewForm',
  fields: ['name', 'comment'],
  validate
}, mapStateToProps, { postReview })(Review);
