import React from 'react';
import Footer from './footer';
import Menu from './menu';
import ToggleNav from './toggle_nav';
import Header from './header';

const MainLayout = (props) => {

   	
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

export default MainLayout;