import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
export const fields = [ 'name', 'rating', 'comment' ]

class ReviewForm extends Component {


  render() {


    const {
      fields: { name, rating, comment },
      handleSubmit,
      resetForm,
      submitting
      } = this.props


    return (

      <form onSubmit={handleSubmit} className="form-group">
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

ReviewForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'review',
  fields
})(ReviewForm)
