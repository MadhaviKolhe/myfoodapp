import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { listFoodItem } from "../../store/action/fooditem";
// import { addFoodItem } from "../../store/action/fooditem";
import { addFoodItem } from "../../store/action/fooditem";


export class AddFoodItem extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            foodItem:{
                // id:'',
                name: ''
               
            },
            errors: {},
            msg: '',
            // foodItems:[]
        };
      }

    // componentDidMount(){
    //     //fetch all menus: call action
    //     this.props.listFoodItem();
    // }  

    render(){
        return(
            <div>
            <div className="card">
              {/* <h5 className="card-header">Add FoodItemList</h5> */}
              <div className="card-body">
                <h5 className="card-title">Enter FoodItem Info: </h5>
                <p className="card-text">
                <span>{this.state.msg}</span> <br />


                   <label>FoodItem Name: </label>
                   <input type="text" 
                            name="name"
                            value={this.state.foodItem.name}
                            onChange={this.changeHandler} />
                            <span style={{ color : 'red'}}>{this.state.errors['name']}</span>
                    <br /><br />

                    <button onClick={this.onAdd} className="btn btn-primary">Add FoodItem</button>
                </p>
                 
              </div>
            </div>
          </div>
        );
    }

    changeHandler= (event) =>{
        this.setState({
            foodItem: {
                ...this.state.foodItem, 
                // [event.target.foodItem] : event.target.value
                [event.target.name] : event.target.value
            }
        });
}

onAdd  = async ()=>{
    /* Validate User inputs */
    if(this.handleValidation()){
        console.log(this.state.foodItem);
        /* Call the API */
       this.postFoodItem(this.state.foodItem);
    }
    else{
        /* Display error messages */
        console.log('validation not passed..');     
    }
}

handleValidation(){
    // let id = this.state.menu.id;
    let name = this.state.foodItem.name;
    
    let tempErrors={}
    let formValid = true; 

    

    if(!name){ //If name is not given
        formValid = false;
        tempErrors['name']='FoodItem Name cannot be empty';
    }
    
    this.setState({
        errors: tempErrors
    });

    return formValid; 
}

async postFoodItem(foodItem){
    // let foodItem = {
    //     // id:e.id,
    //     name: e.name,
    try {
        const response = axios.post("http://localhost:8585/add", foodItem);
        const data = (await response).data;
        console.log('API success');
        console.log(data);
        this.setState({
            msg: data.msg
        })
        this.props.addFoodItem(data);
      } catch (error) {
        console.log(error)
        this.setState({
            msg: 'Food Item added'
        })
      }
}
}


function mapStateToProps(state){
    return {
        // rest : []
    }    
}

export default connect(mapStateToProps, {})(AddFoodItem); 