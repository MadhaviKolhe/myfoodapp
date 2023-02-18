import { Component } from "react";
import { connect } from "react-redux";
import { listMenu } from "../../store/action/menu";


export class MenuList extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          
        };
      }
    
      componentDidMount() {
          this.props.listMenu();
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
                this.props.menuList.list.map((e, index) => (
                 
                  <tr key={e.id}>
                    <th scope="row" key={e.id}> {index + 1}</th>
                    {/* <td>{e.id}</td> */}
                    <td>{e.name}</td>
                    
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
      menuList: state.menu
    }; 
  }
  
  export default connect(mapStateToProps, {listMenu})(MenuList);
