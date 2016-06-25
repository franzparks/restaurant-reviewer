import React,{Component} from 'react';
import MenuItem from './menuitem';

class Menu extends Component {

	constructor(props) {
        super(props);
        this.state = {"selected" :"list-group-item active", "unselected":"list-group-item", "style":""};
        this.handleClick = this.handleClick.bind(this);
        this.displayMenuItems = this.displayMenuItems.bind(this);
    }

    handleClick (e){
        this.props.selectionHandler(e.target.name);
        //this.setState({style :"list-group-item"});
        if(e.target.className === "list-group-item"){
        	e.target.className = "list-group-item active";
        	//this.setState({style :"list-group-item"});	
        }else{
        	//e.target.className = "list-group-item";
        }
        this.setState({style :"list-group-item"});

        console.log(Object.keys(e));
	}

	displayMenuItems (){
		var vals = {"all":"All"};
		var menuItems = [];
		menuItems.push(
		<MenuItem 
           label={vals["all"]}
           style={this.state.selected}
           handleClick={this.handleClick}

		/>
		);
		return menuItems;
	}


	render() {
        var items = this.displayMenuItems;
	return (
		

	    <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">

			<div className="list-group">
			    {items}
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