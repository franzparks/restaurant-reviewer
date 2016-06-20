import React from 'react';

const SearchBar = (props) => {
  
    handleOnChange function(e){
        props.handleChange(e.target.value);
    }.bind(this);

    return (
        <form className="navbar-form navbar-center" role="search" >
	        <div className="form-group">	        
	        	<input
	        	    className="form-control"
	        	    type="text"
	        	    placeholder=" Name, Location"
	        	    onChange={this.handleOnChange}
	        	    value={props.filterText}
	        	    
	        	/>  
	        </div>	  
        </form>
    );
}

export default SearchBar;