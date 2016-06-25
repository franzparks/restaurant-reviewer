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
			    <a href="#" name='all' className={this.state.style} onClick={this.handleClick} >All</a>
			    <a href="#" name='highestRated' className={this.state.style} onClick={this.handleClick}>Highest Rated</a>
			    <a href="#" name='mostReviewed' className={this.state.style} onClick={this.handleClick}> Most Reviewed</a>
			    <a href="#" name='openNow' className={this.state.style} onClick={this.handleClick}>Open Now</a> 
			          
			</div>
		</div>
	);	

}
}

export default Menu;