import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {
  ButtonGroup,
  DropdownButton,
  MenuItem, 
  ButtonToolbar
} from 'react-bootstrap';


class DropDownMenu extends Component{

    constructor(props) {
        super(props);
        this.state = {"selected" :""};
        this.handleClick = this.handleClick.bind(this);
        
    }
    
    componentDidMount(){
        this.setState({selected : 'all'});
    }

    handleClick (e){
      this.props.setCategoryFilter(e.target.name);

      /* Identify selected item*/
      this.setState({selected : e.target.name});
    }

  render(){

     return (
      <div>
        
        <ButtonToolbar>
        
        <DropdownButton bsStyle={'primary'} title="MainMenu" id="dropdown-basic" key={Math.random() * 1000}>

          <MenuItem name="all" label="MenuItem"
            onClick={this.handleClick}
            active={this.state.selected === 'all'}>
            All
          </MenuItem>
          <MenuItem divider />
          <MenuItem  name="highestRated" 
            onClick={this.handleClick} 
            active={this.state.selected === 'highestRated'}>
            Highest Rated
          </MenuItem>
          <MenuItem name="mostReviewed" 
            onClick={this.handleClick} 
            active={this.state.selected === 'mostReviewed'}>
            Most Reviewed
          </MenuItem>
          <MenuItem name="openNow"
            onClick={this.handleClick} 
            active={this.state.selected === 'openNow'}>
            Open Now
          </MenuItem>

        </DropdownButton>
    
        </ButtonToolbar>
        
        </div>
     );
 }

} 


export default connect(null, actions)(DropDownMenu);