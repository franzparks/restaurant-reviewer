import React,{Component} from 'react';

class Menu extends Component {

	constructor(props) {
        super(props);
        this.state = {"style" :"list-group-item"};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (e){
        this.props.selectionHandler(e.target.name);
        if(e.target.className === this.state.style){
        	e.target.className = "list-group-item active";
        }
	}


	render() {

	return (
		

	    <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">

			<div className="list-group">
			    <a href="#" name= 'all' className="list-group-item" onClick={this.handleClick} >All</a>
			    <a href="#" className="list-group-item" onClick={() => props.selectionHandler('highestRated')}>Highest Rated</a>
			    <a href="#" className="list-group-item" onClick={() => props.selectionHandler('mostReviewed')}>Most Reviewed</a>
			    <a href="#" className="list-group-item" onClick={() => props.selectionHandler('openNow')}>Open Now</a> 
			          
			</div>
		</div>
	);	

}
}

export default Menu;