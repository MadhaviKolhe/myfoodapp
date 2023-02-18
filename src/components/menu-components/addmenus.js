// import axios from "axios";
// import { Component } from "react";
// import { connect } from "react-redux";
// import {addMenu} from '../../store/action/menu';
// // import Menu from "../Menu";

//  export  class AddMenus extends Component{
  

//     constructor(props){
//         super(props);
//     this.state = {
//         menu:{
//             name: ''
//         },
//         errors: {},
//         msg: ''

//     };
//   }

        
//   render() {
//     return (
//       <div>
//         <div className="card">
//           <h5 className="card-header">Add Menu</h5>
//           <div className="card-body">
//             <h5 className="card-title">Enter Menu Info: </h5>
//             <p className="card-text">
//             <span>{this.state.msg}</span> <br />
//                <label>Menu Name: </label>
//                <input type="text" 
//                         name="name"
//                         value={this.state.menu.name}
//                         onChange={this.changeHandler} />
//                         <span style={{ color : 'red'}}>{this.state.errors['name']}</span>
//                 <br /><br />
//                 <button onClick={this.onAdd}>Add menu</button>
//             </p>

//           </div>
//         </div>
//       </div>
//     );
//   }

//   changeHandler= (event) =>{
//     this.setState({
//         menu: {
//             ...this.state.menu, 
//             [event.target.name] : event.target.value
//         }
//     });
// }

// onAdd = ()=>{
//     /* Validate User inputs */
//     if(this.handleValidation()){
//         console.log(this.state.menu);
//         /* Call the API */
//        this.postMenu(this.state.menu);
//     }
//     else{
//         /* Display error messages */
//         console.log('validation not passed..');     
//     }
// }

   
// handleValidation(){
//     let name = this.state.menu.name;

//     let tempErrors={}
//     let formValid = true; 
//     if(!name){ //If name is not given
//         formValid = false;
//         tempErrors['name']='Menu Name cannot be empty';
//     }

//     this.setState({
//         errors: tempErrors
//     });

//     return formValid; 
// }

// async postMenu(menu){
//     try {
//         const response = axios.post("http://localhost:8383/api/menu/add", menu);
//         const data = (await response).data;
//         console.log('API success');
//         console.log(data);
//         this.setState({
//             msg: data.msg
//         })

//         //react out to action and update the store
//         this.props.addMenu(data);
//       } catch (error) {
//          console.log(error)
//         //console.error(error.response.data.msg);
//         this.setState({
//             msg: 'Operation Failed'
//         })
//       }
// }
// }
// function mapStateToProps(state){
//     return {
//         // menuList : state.menu
//     }    
// }

// export default connect(mapStateToProps, {})(AddMenus); 




import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import {addMenu} from '../../store/action/menu';
// import Menu from "../Menu";

 export class AddMenus extends Component{
  

    constructor(props){
        super(props);
    this.state = {
        menu:{
            name: ''
        },
        errors: {},
        msg: ''
        
    };
  }

  componentDidMount(){

  }
        


  render() {
    return (
      <div>
        <div className="card">
          <h5 className="card-header">Add Menu</h5>
          <div className="card-body">
            <h5 className="card-title">Enter Menu Info: </h5>
            <p className="card-text">
            <span>{this.state.msg}</span> <br />
               <label>Menu Name: </label>
               <input type="text" 
                        name="name"
                        value={this.state.menu.name}
                        onChange={this.changeHandler} />
                        <span style={{ color : 'red'}}>{this.state.errors['name']}</span>
                <br /><br />
                <button onClick={this.onAdd}>Add menu</button>
            </p>

          </div>
        </div>
      </div>
    );
  }

  changeHandler= (event) =>{
    this.setState({
        menu: {
            ...this.state.menu, 
            [event.target.name] : event.target.value
        }
    });
}

onAdd = ()=>{
    /* Validate User inputs */
    if(this.handleValidation()){
        console.log(this.state.menu);
        /* Call the API */
       this.postMenu(this.state.menu);
    }
    else{
        /* Display error messages */
        console.log('validation not passed..');     
    }
}

   
handleValidation(){
    let name = this.state.menu.name;

    let tempErrors={}
    let formValid = true; 
    if(!name){ //If name is not given
        formValid = false;
        tempErrors['name']='Menu Name cannot be empty';
    }

    this.setState({
        errors: tempErrors
    });

    return formValid; 
}

async postMenu(menu){
    try {
        const response = axios.post("http://localhost:8383/api/menu/add", menu);
        const data = (await response).data;
        console.log('API success');
        console.log(data);
        this.setState({
            msg: data.msg
        })
        //react out to action and update the store
        this.props.addMenu(data);
      } catch (error) {
         console.log(error)
        //console.error(error.response.data.msg);
        this.setState({
            msg: 'Operation Failed'
        })
      }
}
}
function mapStateToProps(state){
    return {
        // menuList : state.menu
    }    
}

export default connect(mapStateToProps, {})(AddMenus); 