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

  constructor(props) {
        super(props);
        this.state = {"selected" :"list-group-item active", "unselected":"list-group-item", "style":"", "selectedItem":""};
        this.handleClick = this.handleClick.bind(this);
        //this.displayMenuItems = this.displayMenuItems.bind(this);
        
    }
    
    componentDidMount(){
        this.setState({selectedItem : 'all'});
    }

    handleClick (e){

        //this.props.setCategoryFilter(e.target.name);

        /* Identify selected item*/
        //this.setState({selectedItem : e.target.name});
        console.log(e.target.name);
  }


  render(){

     return (
        <ButtonToolbar>
        <DropdownButton bsStyle={'primary'} title={'Toggle Nav'} key={Math.random() * 1000} id={'dropdown-basic-0'}>
          <MenuItem eventKey="1" name="all" onClick={this.handleClick}>All</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="2" name="highestRated" onClick={this.handleClick}>Highest Rated</MenuItem>
          <MenuItem eventKey="3" name="mostReviewed" onClick={this.handleClick}>Most Reviewd</MenuItem>
          <MenuItem eventKey="4" name="openNow" onClick={this.handleClick}>Open Now</MenuItem>
        </DropdownButton>
        </ButtonToolbar>
     );
 }

} 


export default connect(null, actions)(SampleMenu);