import { Component } from "react";
import { store } from "./store"
import { Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import Menu from "./components/Menu";
import './App.css';
import NavBar from "./components/navbar";
import SignUp from "./components/SignUp";
// import FoodApp from "./components/Food-App";
import { Login } from "./components/auth/login";
import { Restaurant } from "./components/Restaurant";
// import { Fooditem } from "./components/Fooditem";
import Fooditem from "./components/Fooditem";
import './App.css';

export default class App extends Component {
   /* Which function does react call:render() */
   render() { /*render must return something(jsx) */
      return (

         <div>
            <Provider store={store}>

               <NavBar />



               {/* <SignUp/> */}
               {/* <Menu /> */}
               <Routes>
                  <Route path="/" element={<Login />} />
                  {/* <Route path="/foodapp" element={ <FoodApp/>}/> */}

                  <Route path="/menu" element={<Menu />} />
                  <Route path="/sign-up" element={<SignUp />} />
                  <Route path="/restaurant" element={<Restaurant />} />
                  <Route path="/fooditem" element={<Fooditem />} />

               </Routes>

            </Provider>
         </div>);
   }
}




