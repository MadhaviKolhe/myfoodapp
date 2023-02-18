// import { Component } from "react";
// import { connect } from "react-redux";
 
// import { AddMenu } from "./menu-components/addmenu";
// import Restaurant from "./menu-components/restaurant";
// import MenuList from "./menu-components/menuList";
// import { listRestaurant } from "../store/action/restaurant";

// export  class Menu extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       componentNum: 0
//     };
//   }
 
//   componentDidMount(){
//     this.props.listRestaurant();
//   }
//   render() { 
//     return (
//       <div className="container-fliud">
//         <div className="row">
//           <div className="col-sm-3">
//             <ul className="list-group">
//               <li className=" list-group-item"> <button   className="list-group-item employee-sidebar" onClick={()=>{
//                 this.setState({componentNum : 1})
//               }} > Show all Menus </button> </li>
//               <li className="list-group-item">
//                 <button  className=" list-group-item employee-sidebar" 
//                 onClick={()=>(this.setState({componentNum : 2}))}>
//                    Add Restaurant</button></li>
//                    <li className="list-group-item">
//                 <button  className=" list-group-item menu-sidebar" 
//                 onClick={()=>(this.setState({componentNum : 3}))}>
//                    Add Menu</button></li>
              
//               {/* <li className="list-group-item">Assign Menu to Restaurant</li>
//               <li className="list-group-item">Show all Restaurant</li> */}
//             </ul>
//           </div>
//           <div className="col-lg-9">
//               {this.state.componentNum === 1?
//                   <MenuList />:this.state.componentNum === 2?
//                   <Restaurant />:<AddMenu dept={this.props.rest} />}
//           </div> 
//         </div>
//       </div>
//     );
//   }
// };
// function mapStateToProps(state){
//   return {
//       dept : state.department
//   }    
// }
// export default connect(mapStateToProps, {listRestaurant})(Menu); 











// import { Component } from "react";
// import { connect } from "react-redux";
 
// import { AddMenu } from "./menu-components/addMenu";
// import Restaurant from "./menu-components/restaurant";
// import MenuList from "./menu-components/menuList";
// import { listRestaurant } from "../store/action/restaurant";

// export  class Menu extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       componentNum: 0
//     };
//   }
 
//   componentDidMount(){
//     this.props.listRestaurant();
//   }
//   render() { 
//     return (
//       <div className="container-fliud">
//         <div className="row">
//           <div className="col-sm-3">
//             <ul className="list-group">
//               <li className=" list-group-item"> <button   className="list-group-item employee-sidebar" onClick={()=>{
//                 this.setState({componentNum : 1})
//               }} > Show all Menus </button> </li>
//               <li className="list-group-item">
//                 <button  className=" list-group-item employee-sidebar" 
//                 onClick={()=>(this.setState({componentNum : 2}))}>
//                    Add Restaurant</button></li>
//                    <li className="list-group-item">
//                 <button  className=" list-group-item menu-sidebar" 
//                 onClick={()=>(this.setState({componentNum : 3}))}>
//                    Add Menu</button></li>
              
//               {/* <li className="list-group-item">Assign Menu to Restaurant</li>
//               <li className="list-group-item">Show all Restaurant</li> */}
//             </ul>
//           </div>
//           {/* <div className="col-lg-9">
//               {this.state.componentNum === 1?
//                   <MenuList />:this.state.componentNum === 2?
//                   <Restaurant />:<AddMenu dept={this.props.rest} />}
//           </div>  */}
//         </div>
//       </div>
//     );
//   }
// };
// function mapStateToProps(state){
//   return {
//       dept : state.department
//   }    
// }
// export default connect(mapStateToProps, {listRestaurant})(Menu); 














import { Component } from "react";
import { connect } from "react-redux";
 
import { AddMenus } from "./menu-components/addmenus";
// import Restaurant from "./menu-components/restaurant";
import MenuList from "./menu-components/menuList";
// import { listRestaurant } from "../store/action/restaurant";

export  class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      componentNum: 0
    };
  }
 
  componentDidMount(){
    // this.props.listRestaurant();
  }
  render() { 
    return (
      <div className="container-fliud">
        <div className="row">
          <div className="col-sm-3">
            <ul className="list-group">
              <li className=" list-group-item"> <button   className="list-group-item employee-sidebar" onClick={()=>{
                this.setState({componentNum : 1})
              }} > Show all Menus </button> </li>
              <li className="list-group-item">
                <button  className=" list-group-item employee-sidebar" 
                onClick={()=>(this.setState({componentNum : 2}))}>
                   Add Menu</button></li>
                   {/* <li className="list-group-item">
                <button  className=" list-group-item menu-sidebar" 
                onClick={()=>(this.setState({componentNum : 3}))}>
                   Add Menu</button></li> */}
              
              {/* <li className="list-group-item">Assign Menu to Restaurant</li>
              <li className="list-group-item">Show all Restaurant</li> */}
            </ul>
          </div>
          <div className="col-lg-9">
              {this.state.componentNum === 1?
                  <MenuList />:this.state.componentNum === 2?
                  <AddMenus />:this.props.addmenu}
          </div> 
        </div>
      </div>
    );
  }
};
function mapStateToProps(state){
  return {
      // menu:state.addmenu
  }    
}
export default connect(mapStateToProps, {AddMenus})(Menu); 

