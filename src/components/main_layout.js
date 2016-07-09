import React from 'react';
import Footer from './footer';
import Menu from './menu';
import ToggleNav from './toggle_nav';
import Header from './header';

const MainLayout = (props) => {

   	
    return (
        <div>
            <Header />
	  	    <div className="container">
	  	       {props.children}
	           <Footer />
	        </div> 
        </div>
  	);
	 	
}

export default MainLayout;