// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import { Component } from "react";
import { store } from "./store"
import { Route,Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import Menu from "./components/Menu";
import './App.css';
import NavBar from "./components/navbar";
import SignUp from "./components/SignUp";
// import FoodApp from "./components/Food-App";
import { Login } from "./components/auth/login";

export default class App extends Component{
   /* Which function does react call:render() */
   render(){ /*render must return something(jsx) */
   return (
   
   <div>
    <Provider store={store}>
    
     <NavBar />
     

   
     {/* <SignUp/> */}
      {/* <Menu /> */}
      <Routes>
      <Route path="/" element={ <Login />} /> 
      {/* <Route path="/foodapp" element={ <FoodApp/>}/> */}
      
         <Route path="/menu" element={ <Menu/>}/>
         <Route path="/sign-up" element={ <SignUp/>}/>
         
           </Routes>
           
           </Provider> 
           </div>);
           }}
 



