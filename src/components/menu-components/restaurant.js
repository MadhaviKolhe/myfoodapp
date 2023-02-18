import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import {addRestaurant} from '../../store/action/restaurant';

 export  class Restaurant extends Component{
  

    constructor(props){
        super(props);
    this.state = {
        restaurant:{
            name: ''
        },
        errors: {},
        msg: ''
    };
  }

        
  render() {
    return (
      <div>
        <div className="card">
          <h5 className="card-header">Add Restaurant</h5>
          <div className="card-body">
            <h5 className="card-title">Enter Restaurant Info: </h5>
            <p className="card-text">
            <span>{this.state.msg}</span> <br />
               <label>Restaurant Name: </label>
               <input type="text" 
                        name="name"
                        value={this.state.restaurant.name}
                        onChange={this.changeHandler} />
                        <span style={{ color : 'red'}}>{this.state.errors['name']}</span>
                <br /><br />
                <button onClick={this.onAdd}>Add restaurant</button>
            </p>

          </div>
        </div>
      </div>
    );
  }

  changeHandler= (event) =>{
    this.setState({
        restaurant: {
            ...this.state.restaurant, 
            [event.target.name] : event.target.value
        }
    });
}

onAdd = ()=>{
    /* Validate User inputs */
    if(this.handleValidation()){
        console.log(this.state.restaurant);
        /* Call the API */
       this.postRestaurant(this.state.restaurant);
    }
    else{
        /* Display error messages */
        console.log('validation not passed..');     
    }
}

   
handleValidation(){
    let name = this.state.restaurant.name;

    let tempErrors={}
    let formValid = true; 
    if(!name){ //If name is not given
        formValid = false;
        tempErrors['name']='Restaurant Name cannot be empty';
    }

    this.setState({
        errors: tempErrors
    });

    return formValid; 
}

async postRestaurant(restaurant){
    try {
        const response = axios.post("http://localhost:8383/api/restaurant/add", restaurant);
        const data = (await response).data;
        console.log('API success');
        console.log(data);
        this.setState({
            msg: data.msg
        })

        //react out to action and update the store
        this.props.addRestaurant(data);
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
        restaurantList : state.restaurant
    }    
}

export default connect(mapStateToProps, {addRestaurant})(Restaurant); 