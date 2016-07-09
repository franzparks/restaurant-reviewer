import React from 'react';

const SearchBar = (props) => {
    
    const handleOnChange = (e) => {
    	e.preventDefault();
        props.handleChange(e.target.value);
    }

    return (
        <form className="navbar-form navbar-center" role="search" >
	        <div className="form-group">

	        	<input
	        	    aria-label="Search Bar"
	        	    className="form-control"
	        	    type="text"
	        	    placeholder=" Name, Location"
	        	    onChange={handleOnChange.bind(this)}
	        	    value={props.filterText}
	        	    
	        	/>  
	        </div>	  
        </form>
    );
}

export default SearchBar;