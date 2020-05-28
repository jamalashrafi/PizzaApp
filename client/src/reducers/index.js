import { combineReducers } from "redux";
import menu from "./menu.js";
import storelocator from "./storelocator.js";

export default combineReducers({
    menu, 
    storelocator
});