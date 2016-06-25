import React,{Component} from 'react';

class Menu extends Component {

	constructor(props) {
        super(props);
        this.state = {"style" :"list-group-item"};
        this.handleClick = this.handleClick.bind(this);
    }

	//var style = "list-group-item";
    handleClick (e){
        //props.selectionHandler(selection);
        //selected = true;
        //style = "list-group-item active";
        //console.log(selected);
        //ele.style = "list-group-item active";
        e.target.class === "list-group-item" ? "list-group-item active" : "";
        console.log(e.target);
	}


	render() {

	return (
		

	    <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">

			<div className="list-group">
			    <a href="#" name= 'all' className={this.state.style} onClick={this.handleClick} >All</a>
			    <a href="#" className="list-group-item" onClick={() => props.selectionHandler('highestRated')}>Highest Rated</a>
			    <a href="#" className="list-group-item" onClick={() => props.selectionHandler('mostReviewed')}>Most Reviewed</a>
			    <a href="#" className="list-group-item" onClick={() => props.selectionHandler('openNow')}>Open Now</a> 
			          
			</div>
		</div>
	);	

}
}

export default Menu;