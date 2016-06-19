import React from 'react';

const SearchBar = () => {
    return (
        <form>
        	<input
        	    type="text"
        	    placeholder="Name, Location"
        	    value={this.props.filterText}
        	/>    
        </form>
    );
}

export default SearchBar;