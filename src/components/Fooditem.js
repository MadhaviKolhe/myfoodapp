 import { Component } from "react";
 import { connect } from "react-redux";
 
// import AddFooditem from "./fooditem-components/addFooditem";
// import { listFoodItem } from "../store/action/fooditem";
import FooditemList from "./fooditem-components/FooditemList";
import AddFooditem from "./fooditem-components/addFooditem";

// import Restaurant from "./menu-components/restaurant";
// import MenuList from "./menu-components/menuList";
// import { listRestaurant } from "../store/action/restaurant";

export  class Fooditem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      componentNum: 0
    };
  }
 
  componentDidMount(){
    //  this.props.listfoodItem();
  }
  render() {
    return (
      <div className="container-fliud">
        <div className="row">
          <div className="col-sm-3">
            <ul className="list-group">
            <li className="list-group-item">
                <button className=" list-group-item fooditem-sidebar"
                  onClick={() => (this.setState({ componentNum: 2 }))}>
                  Add Fooditem</button></li>
              <li className=" list-group-item"> <button className="list-group-item fooditem-sidebar" onClick={() => {
                this.setState({ componentNum: 1 })
              }} > Show all FoodItems </button> </li>
            </ul>
          </div>
          <div className="col-lg-9">
            {this.state.componentNum === 1 ?
              <FooditemList /> : this.state.componentNum === 2 ?
                <AddFooditem /> : this.props.addfoodItem}
          </div>
        </div>
      </div>
    );
  }
};
function mapStateToProps(state){
  return {
      // category : state.category
  }    
}
export default connect(mapStateToProps, {AddFooditem})(Fooditem); 