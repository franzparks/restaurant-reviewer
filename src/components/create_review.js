import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { postReview } from '../actions/index';
import { Link } from 'react-router';
import Stars from './stars';

import {getCurrentDate} from '../utils/utils';

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

      var path = `/restaurants/${this.props.params.id}`;
      
      const review = {
        id : Math.random() * 10000 ,
        ...props, 
        date: getCurrentDate(),
        rating : this.state.rating 
      };

      var restaurant = this.props.restaurant;
        restaurant.reviews = [ ...restaurant.reviews, review];
 
        this.props.postReview(restaurant);	

	    this.context.router.push(path);
    }

  getRating (e){
      //console.log("value of : "+e.target.value);
      const val = parseInt(e.target.value);
      this.setState( {rating: val});
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
              type={'radio'}
              key={this.props.key * 10}
              style={'rating rating_edit rating_font'}
              condition={false} 
              checked_star={this.state.rating}
              keys={[
                Math.random() * 10000,
                Math.random() * 10000,
                Math.random() * 10000,
                Math.random() * 10000,Math.random() * 10000
                ]}
            />

            <div className="number-of-reviews text-danger">
              {/*{comment.touched && name.touched  && this.state.rating === 0 ? rating.error : ''}  */}
            </div>

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

	        <button type="submit" className="btn btn-primary" disabled={this.state.rating === 0 }>Submit</button>
	        <Link to="/" className="btn btn-danger extra-margin-left">Cancel</Link>
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

  //if(values.comment && values.name){
  //  errors.rating = 'Select star to  rate restaurant';
  //}

  return errors;
}

function mapStateToProps(state) {
	return { restaurant : state.appState.restaurant, key : state.appState.keyGen };
}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'ReviewsNewForm',
  fields: ['name', 'comment'],
  validate
}, mapStateToProps, { postReview })(Review);
