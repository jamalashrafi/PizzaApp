import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Jumbotron } from "react-bootstrap";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import * as actions from "../actions";
import storeFront from "./assests/ZP_store-front_1.jpg";

const StoreLocator = () => {
    const [search, setsearch] = useState("");
    const dispatch = useDispatch();
    const storeList = useSelector(state => state.storelocator.storeList);


    const handleChange = event => setsearch(event.target.value);

    const searchRestaurant = (event) => {
        debugger;
        event.preventDefault();
        dispatch(actions.fetchCityId(search, city_Id => {
            dispatch(actions.fetchStoreList(city_Id));
        }));
    }

    const renderStoreList = () => {
        return storeList.length > 0 ? storeList.map((store) =>{
            let data = store.restaurant;
            return (
                <Jumbotron key={data.id} className="storeLocator__jumbotron">
                    <Row>
                     <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                        <img src={storeFront} alt="store_pic"/>
                     </Col>
                     </Row>
                  <div className="storeLocator__jumbotron__div"><span>Name : {data.name}</span></div>
                  <div className="storeLocator__jumbotron__div"><span>Locality : {data.location.locality}</span></div>
                </Jumbotron>
            )
        }):[]
    }

    return (
        <div className="storeLocator">
          <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} className="storeLocator__inputCol">
                  <form onSubmit={searchRestaurant}>
                        <input onChange={handleChange} placeholder="Enter city name"/>
                  </form>
              </Col>
          </Row>
          <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <SimpleBar style={{ height: '50rem', 'overflowX': 'hidden' }}>
                    {renderStoreList()}
                </SimpleBar>
              </Col>
          </Row>
           
       
        </div>
    )
}

export default StoreLocator
