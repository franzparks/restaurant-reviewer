import React, {Component} from 'react';


class RestaurantContainer  extends Component {

     
        constructor(props) {
        super(props);
        this.state = {
            //restaurants : [], 
            filter : props.filterText,
            filterCategory: props.filterCategory,
            restaurants : props.restaurants
        };
        

        }

        componentDidMount() {
           // this.setState({ restaurants : this.props.restaurants});
        }

        
        render(){
            //console.log("restaurants : "+ this.props.restaurants);

            return (
                    <div className="row">
                          {this.props.restaurants} 
                    </div>
            ); 
        }    
}

export default RestaurantContainer;