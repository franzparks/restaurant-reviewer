
import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import {
  ButtonGroup,
  DropdownButton,
  MenuItem, 
  ButtonToolbar,
  Menu

} from 'react-bootstrap';


class FilterMenu extends Component {

	constructor(props) {
        super(props);
        this.state = {"selected" :"" };
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

	render() {
       
		return (
			
		    <div className="col-md-3 col-lg-3  visible-md visible-lg" id="sidebar">
				<div className="list-group">
			
				  <ButtonToolbar>
			        <DropdownButton bsStyle={'link open'}  key={Math.random() * 1000} id={'dropdown-basic-0'}>
			          <MenuItem name="all" 
			            onClick={this.handleClick}
			            active={this.state.selected === 'all'}
			            className={this.state.selected === 'all' ? 'active' : ''} >
			            All
			          </MenuItem>
			          <MenuItem divider />
			          <MenuItem  name="highestRated" 
			            onClick={this.handleClick} 
			            active={this.state.selected === 'highestRated'}
			            className={this.state.selected === 'highestRated' ? 'active' : ''}
			            >
			            Highest Rated
			          </MenuItem>
			          <MenuItem name="mostReviewed" 
			            onClick={this.handleClick} 
			            active={this.state.selected === 'mostReviewed'}
			            className={this.state.selected === 'mostReviewed' ? 'active' : ''}
			            >
			            Most Reviewed
			          </MenuItem>
			          <MenuItem name="openNow"
			            onClick={this.handleClick} 
			            active={this.state.selected === 'openNow'}
			            className={this.state.selected === 'openNow' ? 'active' : ''}
			            >
			            Open Now
			          </MenuItem>
			        </DropdownButton>
			        </ButtonToolbar>
				</div>

				   
			</div>
			
		);	

}
}

export default connect(null, actions)(FilterMenu);
