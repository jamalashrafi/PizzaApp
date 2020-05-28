import { FETCH_STORE_LIST } from ".././actions/types.js";

const INITIAl_STATE = {
    storeList : [],
}

export default function (state = INITIAl_STATE, action){
    switch(action.type){
        case FETCH_STORE_LIST :
            return { ...state, storeList : action.payload };
        default :
            return state; 
    }

}