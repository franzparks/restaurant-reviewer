import React, {Component} from 'react';
import Footer from './footer';
import Menu from './menu';
import ToggleNav from './toggle_nav';
import Header from './header';
import {connect} from 'react-redux';
import * as actions from '../actions';

import {
    filterRestaurant
} from '../utils/utils';


require('../../assets/jquery.min.js');
require("../../assets/offcanvas.css");
require("../../assets/star_presentation.css");
require("../../assets/stars.css");

class MainLayout extends Component {

  
  constructor(props){
        
      super(props);
      
  }

  

    componentWillReceiveProps() {
        this.props.fetchRestaurant(this.props.params.id);
        console.log("after refresh got id :"+this.props.params.id);

    }

  render(){   	
    return (
      <div>
        <header>
          <Header />
        </header>
	  	  <main className="container">
	  	    {this.props.children} 
	      </main>
        <footer>
          <Footer />
        </footer> 
      </div>
  	);
	 	
}

}

export default connect(null,actions)(MainLayout);
