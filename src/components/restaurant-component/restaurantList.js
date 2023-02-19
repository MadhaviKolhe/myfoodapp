import { Component } from "react";
import { listRestaurant } from "../../store/action/restaurant";
import { connect } from "react-redux";

export class RestaurantList extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          
        };
      }
    
      componentDidMount() {
          this.props.listRestaurant();
      }

      render(){
        return(
            <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                {/* <th scope="col">ID</th> */}
                <th scope="col">Name</th>
                
              </tr>
            </thead>
            <tbody>
              {
                this.props.restaurantList.list.map((r, index) => (
                 
                  <tr key={r.id}>
                    <th scope="row" key={r.id}> {index + 1}</th>
                    {/* <td>{e.id}</td> */}
                    <td>{r.name}</td>
                    
                    {/* <td> 
                      {e.projects.map(p=> (
                          <li key={index}>
                              {p.title} 
                          </li>
                      ))}
                    </td> */}
                  </tr>
                
              ))}   
            </tbody>
          </table>
          )
      }
}

function mapStateToProps(state) {
    return {
      restaurantList: state.restaurant
    }; 
  }
  
  export default connect(mapStateToProps, {listRestaurant})(RestaurantList);
