import React from 'react';
import { Row, Col } from "react-bootstrap";
import OrderedPizza from "./OrderedPizza.jsx";
import Cart from "./Cart.jsx";

const Checkout = (props) => {
    
    const { location } = props;
    let checkedItem = location.query !== undefined ? localStorage.setItem("checkedItem", JSON.stringify(location.query)): null;
    checkedItem = location.query || JSON.parse(localStorage.getItem("checkedItem"));

    return (
        <Row>
           <Col xs={1} sm={1} md={2} lg={2} xl={2}></Col>
           <Col xs={4} sm={4} md={3} lg={2} xl={3} className="utilMarginTop">
               <OrderedPizza checkedItem={checkedItem} />
           </Col>
           <Col xs={1} sm={1} md={2} lg={2} xl={2}></Col>
           <Col xs={5} sm={5} md={3} lg={3} xl={3} className="utilMarginTop">
               <Cart />
           </Col>
           <Col xs={1} sm={1} md={2} lg={2} xl={2}></Col>
        </Row>
    )
}

export default Checkout;
