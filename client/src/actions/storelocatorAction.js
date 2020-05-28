import axios from "axios";
import { FETCH_STORE_LIST } from "./types.js";
import { key } from "../config.js";
const base_url = "https://developers.zomato.com/api/v2.1";
const headers = {'user-key': key };

export const fetchCityId = (city, callback) => async dispatch => {

    await axios.get(`${base_url}/cities?q=${city}`, { headers })
    .then(response => {
        let city_id = response.data.location_suggestions[0].id;
        callback(city_id);
    })
    .catch(err => console.log(`CityId Error${err}`));
    console.log(`${fetchStoreList} Value of the function`);
} 

export const fetchStoreList = city_id => async dispatch => {
    await axios.get(`${base_url}/search?q=${city_id}`, { headers })
    .then(restaurantList => {
        console.log("fetchStoreList", restaurantList.data.restaurants);
        dispatch({ type : FETCH_STORE_LIST, payload : restaurantList.data.restaurants})
    })
    .catch( err => console.log(`RestauranList Errore ${err}`));
}