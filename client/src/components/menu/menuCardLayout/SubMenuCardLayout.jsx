import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import myVegpizza from "../../assests/my-vegpizza.jpg";

const SubMenuCardLayout = (props) => {
    const { subCategory } = props;
   
    return (
        <div>
        <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="orderBox utilMarginBottomSmall">
                    <h2 className="orderBox__heading">{subCategory.SubName}</h2>
                    <img src={myVegpizza} alt="images" className="orderBox__image"/>
                     <p className="orderBox__paragraph">{subCategory.SubMessage}</p>
                     <Link to={{pathname: `/checkout`, query:{subCategory}}} className="linkMain">
                        <button className="btnMain">Order Now</button>
                    </Link>   
                </div>
            </Col>
        </Row>
    </div>
    )
}

export default SubMenuCardLayout
