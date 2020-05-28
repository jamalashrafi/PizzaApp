import { FETCH_PIZZA_LIST, PIZZA_LIST_ERROR } from "./types.js";
import axios from "axios";

export const fetchPizzaList = () => async dispatch => {

    try{
        const response = await axios.get(`/getproducts`);
        dispatch({ type : FETCH_PIZZA_LIST, payload : response.data});
    }catch(error){    
        let msg = "We are facing an issue, please try again";
        dispatch({ type : PIZZA_LIST_ERROR, payload : msg});
    }
    
}

