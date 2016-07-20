import React, {Component} from 'react';
import Footer from './footer';
import Menu from './menu';
import ToggleNav from './toggle_nav';
import Header from './header';

require('../../assets/jquery.min.js');
require("../../assets/offcanvas.css");
require("../../assets/star_presentation.css");
require("../../assets/stars.css");

class MainLayout extends Component {

  render(){   	
    return (
      <div>
        <header>
          <Header />
        </header>
	  	  <main className="container">
	  	    {props.children} 
	      </main>
        <footer>
          <Footer />
        </footer> 
      </div>
  	);
	 	
}

}

export default MainLayout;