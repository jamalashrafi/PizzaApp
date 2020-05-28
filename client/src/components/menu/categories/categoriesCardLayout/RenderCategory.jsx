import React from 'react';
import { Row, Col } from "react-bootstrap";
import SubMenuCardLayout from "../../menuCardLayout/SubMenuCardLayout.jsx";

const RenderCategory = (props) => {
    const  categoryList  = props || [];

    return (
        <Row>  
            { categoryList !== undefined  ?
                categoryList.map((item, pos) => (
                    <Col xs={12} sm={6} md={6} lg={4} xl={3} className="orderSection" key={pos}>
                         <SubMenuCardLayout subCategory = {item}  />
                    </Col>              
            )):null
            }
        </Row>
    )
}

export default RenderCategory
