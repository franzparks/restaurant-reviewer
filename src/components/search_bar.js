import React from 'react';

const SearchBar = () => {
    return (
        <form className="navbar-form navbar-center" role="search">
	        <div className="form-group">	        
	        	<input
	        	    className="form-control"
	        	    type="text"
	        	    placeholder=" Name, Location"
	        	    value={this.props.filterText}
	        	    
	        	/>  
	        </div>	  
        </form>
    );
}

export default SearchBar;