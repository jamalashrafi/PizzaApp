import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import myVegpizza from "../../assests/my-vegpizza.jpg";

const MenuCardLayout = (props) => {
    const category = props.category;
    const url = category.url;
    return (
        <div>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="orderBox utilMarginBottomSmall">
                        <h2 className="orderBox__heading">{category.Name}</h2>
                        <img src={myVegpizza} alt="images" className="orderBox__image"/>
                        <p className="orderBox__paragraph">{category.Message}</p>
                        <button className="btnMain">
                            <Link to={{pathname: `/${url}`, query:{category}}} className="linkMain">View All</Link>
                        </button>
                        
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default MenuCardLayout;
