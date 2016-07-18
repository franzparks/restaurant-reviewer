
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
        this.handleClick = this.handleClick.bind(this);
        this.renderMenu = this.renderMenu.bind(this);
    }
    
    componentWillMount(){
        this.setState({selected : 'all'});
    }

    handleClick (e){

        this.props.setCategoryFilter(e.target.name);

        /* Identify selected item*/
        this.props.handleClick(e.target.name);
	}


	renderMenu(props){
		console.log(props.selected);
		return(
			<ButtonToolbar tabIndex="-1">
	        <DropdownButton bsStyle={'link'} open noCaret 
	         title={'Menu'} key={Math.random() * 1000} id={'dropdown-basic-0'} >
	          <MenuItem 
	            name="all" 
	            eventKey={"all"}
	            onClick={this.handleClick}
	            active={props.selected === 'all'}
	            >
	            All
	          </MenuItem>
	          <MenuItem divider />
	          <MenuItem  
	          	name="highestRated" 
	          	eventKey={"highestRated"}
	            onClick={this.handleClick} 
	            active={props.selected === 'highestRated'}
	            
	            >
	            Highest Rated
	          </MenuItem>
	          <MenuItem 
	          	name="mostReviewed" 
	          	eventKey={"mostReviewed"}
	            onClick={this.handleClick} 
	            active={props.selected === 'mostReviewed'}
	            
	            >
	            Most Reviewed
	          </MenuItem>
	          <MenuItem 
	          	name="openNow"
	          	eventKey={"openNow"}
	            onClick={this.handleClick} 
	            active={props.selected === 'openNow' }
	            
	            >
	            Open Now
	          </MenuItem>
	        </DropdownButton>
	        </ButtonToolbar>
        );
	}

	render() {
       
		return (
			
		    <div className="col-md-3 col-lg-3  visible-md visible-lg" id="sidebar">
				<div className="list-group">
			
				  {this.renderMenu(this.props)}
				</div>

				   
			</div>
			
		);	

}
}

export default connect(null, actions)(FilterMenu);
