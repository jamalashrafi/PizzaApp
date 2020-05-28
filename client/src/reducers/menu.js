import { FETCH_PIZZA_LIST, PIZZA_LIST_ERROR } from ".././actions/types.js";

const INITIAl_STATE = {
    pizzaList : [],
    pizzaListError : ""
}

export default function (state = INITIAl_STATE, action){
    switch(action.type){
        case FETCH_PIZZA_LIST :
            return { ...state, pizzaList : action.payload };
        case PIZZA_LIST_ERROR :
            return { ...state, pizzaListError : action.payload };
        default :
            return state; 
    }

}