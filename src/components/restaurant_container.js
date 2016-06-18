import React from 'react';
import Restaurant from './restaurant';
//import {connect} from 'react-redux';

const RestaurantContainer = () => {
  
        return (
                <div className="row">
                    <Restaurant />
                    <div className="col-xs-6 col-lg-4">
                      <h2>Heading</h2>
                      <p>Donec id elit non mi porta gravida at eget metus. Fusce 
                         dapibus, tellus ac cursus commodo, tortor mauris condime
                         uada magna mollis euismod. Donec sed odio dui. </p>
                      <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                    </div>
                    <div className="col-xs-6 col-lg-4">
                      <h2>Heading</h2>
                      <p>Donec id elit non mi porta gravida at eget metus.
                       Fusce dapibus, tellus ac cursus commodo, tortor mauris 
                       condimentum nibh, ut fermentum massa justo sit amet risus. Etiam 
                       porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                      <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                    </div>
                    <div className="col-xs-6 col-lg-4">
                      <h2>Heading</h2>
                      <p>Donec id elit non mi porta gravida at eget metus.
                       Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, 
                       ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis 
                       euismod. Donec sed odio dui. </p>
                      <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                    </div>
                    <div className="col-xs-6 col-lg-4">
                      <h2>Heading</h2>
                      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus 
                      commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                       Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                      <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                    </div>
                  </div>
        );  
}

export default RestaurantContainer;