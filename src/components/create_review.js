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

        this.onSubmit = this.onSubmit.bind(this);
        //this.getRating = this.getRating.bind(this);
        //this.renderForm = this.renderForm.bind(this);
    }

    onSubmit(props) {

        //console.log("props : "+ props);
        //console.log("restaurant : "+ Object.keys(this.props.restaurant[0]));
        var path = `/restaurants/${this.props.params.id}`;
          
        const review = {
            id : Math.random() * 10000 ,
            ...props, 
            date: getCurrentDate()
        };

        var restaurant = this.props.restaurant[0];
            restaurant.reviews = [ ...restaurant.reviews, review];

        this.props.postReview(restaurant);  

        this.context.router.push(path);
    }


  render() {

    const {
        fields: { name, rating, comment },
        handleSubmit,
        resetForm,
        submitting
    } = this.props


    return (
        <div className="col-xs-12 col-lg-6">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
            
            <div className="form-group">
                <label htmlFor="name" className="control-label">Name</label>
                <div>
                    <input type="text" placeholder="Name" {...name} id="name" className="form-control"/>
                </div>
            </div>
        
            <div className="form-group">
                <label >Rate Restaurant</label>

                <div className="rating">
                    
                    <label htmlFor="5">
                        <input type="radio" {...rating} 
                            value="5" 
                            id="5"
                            checked={rating.value === '5'} 
                            name="rating" 
                            title="Rocks!"
                            /> 5 stars
                    </label>
            
                    <label htmlFor="4">
                        <input type="radio" {...rating} 
                            value="4" 
                            id="4"
                            checked={rating.value === '4'} 
                            name="rating" 
                            title="Pretty Good!"
                        /> 4 stars
                    </label>

                    <label htmlFor="3">
                        <input type="radio" {...rating} 
                            value="3"
                            id="3" 
                            checked={rating.value === '3'}
                            name="rating" 
                            title="Meh!"
                        /> 3 stars
                    </label>

                    <label htmlFor="2">
                        <input type="radio" {...rating}
                            value="2"
                            id="2" 
                            checked={rating.value === '2'} 
                            name="rating" 
                            title="Kinda Bad"
                        /> 2 stars
                    </label>

                    <label htmlFor="1">
                        <input type="radio" {...rating}
                            value="1"
                            id="1" 
                            checked={rating.value === '1'} 
                            name="rating" 
                            title="Sucks big time"
                        /> 1 stars
                    </label>

                </div>
            </div>  
       
            <div className="form-group">
                <label htmlFor="comment" className="control-label">Comment</label>
                <div>
                    <textarea
                        {...comment}
                        id="comment"
                        // required for reset form to work (only on textarea's)
                        // see: https://github.com/facebook/react/issues/2533
                        value={comment.value || ''}
                        className="form-control"
                    />
                </div>
            </div>

            <div className="form-group">
                <button type="submit" disabled={submitting} className="btn btn-primary btn-lg">
                    {submitting ? <i className="fa fa-paper-plane" /> : <i className="fa fa-paper-plane"/>} Submit
                </button>
                <button type="button" disabled={submitting} onClick={resetForm} className="btn btn-default btn-lg">
                    Clear Values
                </button>
                <button type="button" disabled={submitting} onClick={resetForm} className="btn btn-default btn-lg">
                    Cancel
                </button>
            </div>

        </form>
    </div>
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
