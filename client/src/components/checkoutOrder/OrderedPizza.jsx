import React from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import orderedPizza from "../assests/ordered_pizza.jpg";
import useOrderManager from "./useOrderManager.jsx";

const OrderedPizza = (props) => {
   
    const { checkedItem } = props;
    const [quantity, price, currency, currencybtn, size, handleCurrency, 
        decrementPrice, incrementPrice, handleSize] = useOrderManager(1, 'USD', 'Euro', checkedItem);

    const addItemToCartList = () => {
      
        var objectAddedToCart = {};
        let cartListFromLocalStorage = localStorage.getItem("cartList");
        objectAddedToCart["name"] = checkedItem['subCategory']['SubName'];
        objectAddedToCart["quantity"] = quantity;
        objectAddedToCart["price"] = price;
        objectAddedToCart["size"] = size;
        objectAddedToCart["currency"] = currency;
        objectAddedToCart["currencybtn"] = currencybtn;
        objectAddedToCart["basePrice"] = checkedItem['subCategory']['Price']['Regular'];
        cartListFromLocalStorage = cartListFromLocalStorage !== undefined &&  cartListFromLocalStorage !== null
         ? JSON.parse(cartListFromLocalStorage) 
        : [];
        cartListFromLocalStorage.push(objectAddedToCart);
        localStorage.setItem("cartList",JSON.stringify(cartListFromLocalStorage)); 
        //dispatch(actions.addToCartList(objectAddedToCart));
       // props.history.push("/checkout");
    }

    return (
        
           <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="orderPizza utilMarginBottomSmall">
                        <img src={orderedPizza} alt="images" className="orderPizza__image"/>
                        <div className="orderPizza__subdiv">
                            <span className="orderPizza__subdiv__span">
                                {currency === 'USD' ? `\u0024 ${price}` : `\u20AC ${price}`}
                            </span>
                            <p className="orderPizza__subdiv__paragraph">{checkedItem['subCategory']['SubName']}</p>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Size</Form.Label>
                                    <Form.Control as="select" size="lg" custom onChange={handleSize}>
                                    <option>Regular</option>
                                    <option>Medium</option>
                                    <option>Large</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                            <div className="orderPizza__subdiv__div">
                                <div className="orderPizza__subdiv__div__count" 
                                style={{cursor:'pointer'}} onClick={decrementPrice}>-</div>
                                <div className="orderPizza__subdiv__div__count">
                                    <span className="orderPizza__subdiv__div__count__span">{quantity}</span>
                                </div>
                                <div className="orderPizza__subdiv__div__count" 
                                style={{cursor:'pointer'}} onClick={incrementPrice}>+</div>
                                <Button variant="success" className="orderPizza__subdiv__div__count__btn">
                                    <span className="orderPizza__subdiv__div__count__span"
                                    onClick={handleCurrency}>{currencybtn}</span>
                                </Button>
                            </div>
                            <Link to={{pathname: `/checkout`}} className="linkMain">
                                <Button variant="success" className="orderPizza__subdiv__btn" onClick={addItemToCartList}>
                                    <span className="orderPizza__subdiv__div__count__span">Add to cart</span>
                                </Button>
                            </Link>  
                        </div>
                        
                    </div>
                </Col>
            </Row>
        
    )
}

export default OrderedPizza
