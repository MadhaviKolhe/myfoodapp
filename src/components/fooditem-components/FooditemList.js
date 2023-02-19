import { Component } from "react";
import { connect } from "react-redux";
// import { listMenu } from "../../store/action/menu";
// import { listFoodtItem } from "../../store/action/fooditem";
import { listFoodItem } from "../../store/action/fooditem";
export class FoodItemList extends Component{
    constructor(props) {
        super(props);
        // super();
    
        this.state = {
          
        };
      }
    
      componentDidMount() {
          this.props.listFoodItem();
      }

      render(){
        return(
            <table className="table">
            <thead>
             
                <th scope="col">#</th>
                <th scope="col">Name</th>
                
           
            </thead>
            {/* <tbody> */}
              {
                this.props.fooditemList.list.map((e, index) => (
                 
                  <tr key={e.id}>
                    <th scope="row" key={e.id}> {index + 1}</th>
                    {/* <td>{e.id}</td> */}
                    <td>{e.name}</td>
                
                  </tr>
                
              ))}   
            {/* </tbody> */}
          </table>
          )
      }
}

function mapStateToProps(state) {
    return {
      fooditemList: state.fooditem
    }; 
  }
  
  export default connect(mapStateToProps, {listFoodItem})(FoodItemList);
