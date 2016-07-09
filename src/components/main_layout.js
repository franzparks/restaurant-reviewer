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
	  	       {/*
	            <div className="row row-offcanvas row-offcanvas-right">
	                <div className="col-xs-12 col-sm-9">
				        <ToggleNav />                  
                        <div>
                        {props.children}
                        </div> 
                       
				    </div>
				    <Menu /> 
				         	        
	            </div>
	            */}
	            <Footer />

	        </div> 
        </div>
  	);
	 	
}

export default MainLayout;