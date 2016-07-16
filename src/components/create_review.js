import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { postReview } from '../actions/index';
import { Link } from 'react-router';
import Stars from './stars';

import {getCurrentDate} from '../utils/utils';

export const fields = [ 'name', 'rating', 'comment' ];

class ReviewForm extends Component {

   static contextTypes = {
      router: PropTypes.object
    };

    constructor(props){
      super(props);
        //this.state = {
        // rating : 0
        //}

        this.onSubmit = this.onSubmit.bind(this);
        this.getRating = this.getRating.bind(this);
        //this.renderForm = this.renderForm.bind(this);
    }

    onSubmit(props) {

      console.log("props : "+ props);
     console.log("restaurant : "+ Object.keys(this.props.restaurant[0]));
      var path = `/restaurants/${this.props.params.id}`;
      
      const review = {
        id : Math.random() * 10000 ,
        ...props, 
        date: getCurrentDate()
        //rating : this.state.rating 
      };

      var restaurant = this.props.restaurant[0];
        restaurant.reviews = [ ...restaurant.reviews, review];
 
        this.props.postReview(restaurant);  

      this.context.router.push(path);
    }

  getRating (e){
      const val = parseInt(e.target.value);
      this.setState( {rating: val});
  }


  render() {


    const {
      fields: { name, rating, comment },
      handleSubmit,
      resetForm,
      submitting
      } = this.props


    return (

      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form-group">
        <div>
          <label>Name</label>
          <div>
            <input type="text" placeholder="Name" {...name}/>
          </div>
        </div>
        
        <div>
          <label>Rate</label>
          <div>
            <label>
              <input type="radio" {...rating} value="5" checked={rating.value === '5'} className="rating"/> 5 stars
            </label>
            <label>
              <input type="radio" {...rating} value="4" checked={rating.value === '4'} className="rating"/> 4 stars
            </label>
            <label>
              <input type="radio" {...rating} value="3" checked={rating.value === '3'} className="rating"/> 3 stars
            </label>
            <label>
              <input type="radio" {...rating} value="2" checked={rating.value === '2'} className="rating"/> 2 stars
            </label>
            <label>
              <input type="radio" {...rating} value="1" checked={rating.value === '1'} className="rating"/> 1 stars
            </label>
          </div>
        </div>  
       
        <div>
          <label>Comment</label>
          <div>
            <textarea
              {...comment}
              // required for reset form to work (only on textarea's)
              // see: https://github.com/facebook/react/issues/2533
              value={comment.value || ''}/>
          </div>
        </div>
        <div>
          <button type="submit" disabled={submitting}>
            {submitting ? <i/> : <i/>} Submit
          </button>
          <button type="button" disabled={submitting} onClick={resetForm}>
            Clear Values
          </button>
          <button type="button" disabled={submitting} onClick={resetForm}>
            Cancel
          </button>
        </div>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return { restaurant : state.appState.restaurant, key : state.appState.keyGen };
}

ReviewForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'review',
  fields
}, mapStateToProps, { postReview })(ReviewForm)
