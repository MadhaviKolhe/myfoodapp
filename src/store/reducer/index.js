import { combineReducers } from "@reduxjs/toolkit";

import menu from './menu';
// import restaurant from './restaurant';
import restaurant from "../../components/restaurant-component/restaurant";
import fooditem from "./fooditem";


export default combineReducers({menu,restaurant,fooditem})