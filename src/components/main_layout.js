import React, {Component} from 'react';
import RestaurantContainer from './restaurant_container';
import Overview from './overview';
import Footer from './footer';

class MainLayout extends Component {

	render() {
	    return (
	  	    <div className="container">
	            <div className="row row-offcanvas row-offcanvas-right">
	                 <div className="col-xs-12 col-sm-9">
				          <p className="pull-right visible-xs">
				            <button type="button" className="btn btn-primary btn-xs" data-toggle="offcanvas">Toggle nav</button>
				          </p>
				           <Overview />
				          <div className="row">
				            <div className="col-xs-6 col-lg-4">
				              <h2>Heading</h2>
				              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
				              <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
				            </div>
				            <div className="col-xs-6 col-lg-4">
				              <h2>Heading</h2>
				              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
				              <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
				            </div>
				            <div className="col-xs-6 col-lg-4">
				              <h2>Heading</h2>
				              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
				              <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
				            </div>
				            <div className="col-xs-6 col-lg-4">
				              <h2>Heading</h2>
				              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
				              <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
				            </div>
				          </div>
				        </div>

				        <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
				          <div className="list-group">
				            <a href="#" className="list-group-item active">By Location</a>
				            <a href="#" className="list-group-item">By Cuisine</a>
				            <a href="#" className="list-group-item">By Ratings</a>           
				          </div>
				        </div>
	      	        
	            </div>

	            <Footer />

	        </div> 
	  	);
	}  	
}

export default MainLayout;