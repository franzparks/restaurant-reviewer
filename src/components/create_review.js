import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import classnames from 'classnames';

import { postReview,fetchRestaurant } from '../actions/index';
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
        this.cancel = this.cancel.bind(this);

        console.log("props : "+ Object.keys(props.pushState));

    }


    componentWillMount () {
    // respond to parameter change in scenario 3
   // let oldId = prevProps.params;
    //console.log("prevProps : "+ oldId);
    //let newId = this.props.params.invoiceId
    //if (newId !== oldId)
    //  this.fetchInvoice()

    this.props.fetchRestaurant(this.props.params.id);
    }

    componentWillReceiveProps() {
        //this.props.fetchRestaurant(this.props.params.id);
        //console.log("after refresh got params :"+Object.keys(this.props.routeParams));
        //console.log("after refresh got id :"+Object.keys(this.props.children.props.params));
        //console.log("after refresh location:"+this.props.params);

    }

    onSubmit(props) {

        if(!props.restaurant){ //temporary fix to handle form page refresh
            this.context.router.push('/');
        }
          
        const review = {
            id : Math.random() * 10000 ,
            ...props, 
            date: getCurrentDate()
        };

        var restaurant = this.props.restaurant[0];
            restaurant.reviews = [ ...restaurant.reviews, review];

        this.props.postReview(restaurant); 
 
        var path = `restaurants/${restaurant.id}`; 

        this.context.router.push(path);
    }

    cancel(){
        var path = '/';
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
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form-horizontal">
        
            <div className="form-group">
                <label htmlFor="rate-restaurant">Rate Restaurant</label>

                <div className="rating" id="rate-restaurant">
                    
                    <label  htmlFor="5" id="fiveStars" className={rating.value === '5' ? 'selected' : ''} >
                        <input
                            type="radio" {...rating} 
                            value="5" 
                            id="5"
                            checked={rating.value === '5'} 
                            name="rating" 
                            title="Rocks!"
    
                        /> 5 stars
                    </label>
            
                    <label  htmlFor="4" id="fourStars" className={rating.value === '4' ? 'selected' : ''}>
                        <input 
                            type="radio" {...rating} 
                            value="4" 
                            id="4"
                            checked={rating.value === '4'} 
                            name="rating" 
                            title="Pretty Good!"               
                        /> 4 stars
                    </label>

                    <label htmlFor="3" id="threeStars" className={rating.value === '3' ? 'selected' : ''}>
                        <input 
                            type="radio" {...rating} 
                            value="3"
                            id="3" 
                            checked={rating.value === '3'}
                            name="rating" 
                            title="Meh!"
                            
                        /> 3 stars
                    </label>

                    <label htmlFor="2" id="twoStars" className={rating.value === '2' ? 'selected' : ''}>
                        <input 
                            type="radio" {...rating}
                            value="2"
                            id="2" 
                            checked={rating.value === '2'} 
                            name="rating" 
                            title="Kinda Bad"
                                                 
                        /> 2 stars
                    </label>

                    <label htmlFor="1" id="oneStar" className={rating.value === '1' ? 'selected' : ''}>
                        <input 
                            type="radio" {...rating}
                            value="1"
                            id="1" 
                            checked={rating.value === "1"} 
                            name="rating" 
                            title="Sucks big time"                   
                        /> 1 stars
                    </label>

                </div>
                
            </div>

            <div className="text-danger">
              {name.touched && rating.untouched ? name.error : ''}
            </div>

            <div className={`form-group ${name.touched  && name.invalid ? 'has-danger' : ''}`} >
                <label htmlFor="name-input" className="control-label">Name</label>
                <div>
                    <input type="text" placeholder="Name" {...name} id="name-input" className="form-control" />
                </div>
                <div className="text-danger">
                  {name.touched ? name.error : ''}
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
                <button type="submit" disabled={!rating.value} 
                    className={ rating.value ? 'btn btn-primary btn-lg' : 'btn-lg disabled-button'  }>
                    {submitting ? <i className="fa fa-paper-plane" /> : <i className="fa fa-paper-plane"/>} Submit
                </button>
                <button type="button" disabled={submitting} onClick={resetForm} 
                    className="btn btn-default btn-lg button2">
                    Clear Values
                </button>
                <button type="button" disabled={submitting} onClick={this.cancel} 
                    className="btn btn-default btn-lg button1">
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

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less'
  }
  
  if (!values.rating) {
    errors.rating = 'Required'
  }
  
  return errors
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'review',
  fields,
  validate
}, mapStateToProps, { postReview,fetchRestaurant })(ReviewForm)
