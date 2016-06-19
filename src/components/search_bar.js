import React from 'react';

const SearchBar = () => {
    return (
        <form className="navbar-form navbar-left" role="search">
	        <div className="form-group">
	            <label htmlFor="searchBar">Filter By</label>
	        	<input
	        	    className="form-control"
	        	    id="searchBar"
	        	    type="text"
	        	    placeholder="Name, Location"
	        	    
	        	/>  
	        </div>	  
        </form>
    );
}

export default SearchBar;