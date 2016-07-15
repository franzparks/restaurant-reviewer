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
        this.state = {"selected" :""};
        this.handleClick = this.handleClick.bind(this);
        //this.displayMenuItems = this.displayMenuItems.bind(this);
        
    }
    
    componentDidMount(){
        this.setState({selected : 'all'});
    }

    handleClick (e){

        this.props.setCategoryFilter(e.target.name);

        /* Identify selected item*/
        this.setState({selected : e.target.name});
        //console.log(e.target.name);
  }


  render(){

     return (
        <ButtonToolbar>
        <DropdownButton bsStyle={'primary'} title={'Toggle Nav'} key={Math.random() * 1000} id={'dropdown-basic-0'}>
          <MenuItem name="all" onClick={this.handleClick} active={this.state.selected === 'all'} >All</MenuItem>
          <MenuItem divider />
          <MenuItem  name="highestRated" onClick={this.handleClick} active={this.state.selected === 'highestRated'}>Highest Rated</MenuItem>
          <MenuItem name="mostReviewed" onClick={this.handleClick} active={this.state.selected === 'mostReviewed'}>Most Reviewed</MenuItem>
          <MenuItem name="openNow" onClick={this.handleClick} active={this.state.selected === 'openNow'}>Open Now</MenuItem>
        </DropdownButton>
        </ButtonToolbar>
     );
 }

} 


export default connect(null, actions)(SampleMenu);