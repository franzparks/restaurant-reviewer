import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SearchBar from './search_bar';

class Header extends Component {


    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = function(text){
        this.props.setTextFilter(text);
    }


	render () {
		return (
			<nav className="navbar navbar-fixed-top navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" 
                            data-target="#navbar" aria-expanded="false" aria-controls="navbar" >
                            <span className="sr-only sr-only-focusable text-font">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand" >Restaurant Reviewer</Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active" aria-label="current page"><Link to="/">Home</Link></li>                    
                             
                        </ul>
                        <SearchBar 
                            filterText={this.props.filterText}
                            handleChange={this.handleChange}
                        />
                    </div>
                </div>
            </nav>

		);
	}
}

function mapStateToProps(state) {
  return { filterText : state.filterState.text };
}

export default connect(mapStateToProps, actions)(Header);

