import React,{Component} from 'react';
import MenuItem from './menuitem';

class Menu extends Component {

	constructor(props) {
        super(props);
        this.state = {"selected" :"list-group-item active", "unselected":"list-group-item", "style":"", "item":""};
        this.handleClick = this.handleClick.bind(this);
        this.displayMenuItems = this.displayMenuItems.bind(this);
    }

    handleClick (e){
    	//e.preventDefault();
        this.props.selectionHandler(e.target.name);
        //this.setState({style :"list-group-item"});
        //if(e.target.className === "list-group-item active"){
        //	e.target.className = "list-group-item";
        	//this.setState({style :"list-group-item"});	
        //}else{
        	//e.target.className = "list-group-item";
        //}
        //this.setState({style :"list-group-item"});

        //console.log("i was clicked "+ e.target.name);
        this.setState({item : e.target.name});
	}

	displayMenuItems (){
		var vals = {"all":"All","highestRated":"Highest Rated", "mostReviewed":"Most Reviewed", "openNow":"Open Now"};


		var menuItems = [];

        Object.keys(vals).forEach((key) => {
         
	        menuItems.push(	
				<MenuItem 
				   key={key}
		           label={vals[key]}
		           name={key}
		           style={this.state.unselected}
		           handleClick={this.handleClick}

				/>
			);
         
		});	

		menuItems = menuItems.map((item) =>{
             console.log(item.props);
            if(item.props.name === this.state.item){
            	console.log("clicked here "+item );
            	//item.props.style = this.state.selected;
            	item = <MenuItem 
				   key={item.key}
		           label={item.props.label}
		           name={item.name}
		           style={this.state.selected}
		           handleClick={this.handleClick}

				/>;
            	return item;
            }

            return item;   
		});

		return menuItems;
	}

	render() {
        var items = this.displayMenuItems();
		return (
		    <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
				<div className="list-group">
				    {items}          
				</div>
			</div>
		);	

}
}

export default Menu;