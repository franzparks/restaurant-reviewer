import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {
  ButtonGroup,
  DropdownButton,
  MenuItem, 
  ButtonToolbar
} from 'react-bootstrap';


class SampleMenu extends Component{


  render(){

     return (
        <ButtonToolbar>
        <DropdownButton bsStyle={'primary'} title={'Toggle Nav'} key={Math.random() * 1000} id={'dropdown-basic-0'}>
          <MenuItem eventKey="1">All</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="2">Highest Rated</MenuItem>
          <MenuItem eventKey="3" active>Most Reviewd</MenuItem>
          <MenuItem eventKey="4">Open Now</MenuItem>
        </DropdownButton>
        </ButtonToolbar>
     );
 }

} 


export default connect(null, actions)(SampleMenu);