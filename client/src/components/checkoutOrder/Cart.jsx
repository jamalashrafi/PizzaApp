import React, {useEffect, useState} from 'react';
import { Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import cart from "../assests/cart.jpg";
 
const Cart = (props) => {
    debugger;
    let cartList = [];
    const[currencyBtnVal, setcurrencyBtnVal] = useState("USD");
    const[currencyBtnlabel, setcurrencyBtnlabel] = useState("Euro");
    const[subtotal, setsubtotal] = useState(0);
    let listFromLocalStorage = JSON.parse(localStorage.getItem("cartList"));
        cartList = listFromLocalStorage !== null ?
        JSON.parse(localStorage.getItem("cartList")) : [];

        useEffect(()=>{
            handleCurrency();
            updateSubTotal();
        });

    const updateSubTotal = () =>{
        let subtotal = 0;
        let listFromLocalStorage = JSON.parse(localStorage.getItem("cartList"));
        listFromLocalStorage.map(obj => subtotal += Number(obj['price']));
        subtotal = currencyBtnVal === "Euro" ? Number(subtotal.toFixed(2)) : subtotal;
        localStorage.setItem("subtotal",JSON.stringify({"subtotal":subtotal, "currency":currencyBtnVal}));
        setsubtotal(subtotal);
    }

    const upDateList = (objFromList, noOfItems, price) => {
        let listFromLocalStorage = JSON.parse(localStorage.getItem("cartList"));
        return listFromLocalStorage.map(obj => {
            if(obj.name === objFromList.name){
                obj['price'] = price;
                obj['quantity'] = noOfItems;
                obj['currency'] = currencyBtnVal;
                obj['currencybtn'] = objFromList['currencybtn'];
            }
            return obj;
        });
    }

    const handleCurrency = (event) => {
        let currencyVal = currencyBtnVal;
        let currencyBtnlabelVal = currencyBtnlabel;
        if(event){
            currencyVal = currencyBtnVal === "USD" ? "Euro" : "USD";  
            currencyBtnlabelVal = currencyBtnlabelVal === "Euro" ? "USD" : "Euro";    
        }
        let listFromLocalStorage = JSON.parse(localStorage.getItem("cartList"));
        cartList = listFromLocalStorage !==null ? listFromLocalStorage.map(object => {
            if(currencyVal === "Euro" &&  object["currency"] === "USD"){
                let priceInEuro = object["price"] * 0.92;
                let roundedPriceInEuro = Number(priceInEuro.toFixed(2));
                object["price"] = roundedPriceInEuro;
                object["currency"] = "Euro";
                object["currencybtn"] = "USD";
            }
            else if(currencyVal === "USD" &&  object["currency"] === "Euro"){
                let priceInDollar = object["price"] / 0.92;
                let roundedPriceInDollar = Number(priceInDollar.toFixed(2));
                object["price"] = roundedPriceInDollar;
                object["currency"] = "USD";
                object["currencybtn"] = "Euro";
            }  
            return object;
        }): [];
        localStorage.setItem("cartList",JSON.stringify(cartList));
        setcurrencyBtnVal(currencyVal);
        setcurrencyBtnlabel(currencyBtnlabelVal);
        updateSubTotal();
    }
 
    const handleIncrementPrice = objFromList => {
        let noOfItems = objFromList["quantity"];
        let initialPrice = objFromList["basePrice"];
        let price = Number(objFromList["price"]);
        let currency = currencyBtnVal;
        let singleItemPrice;
        let priceInEuro = (initialPrice * 0.92).toFixed(2);
        if(price > 0)
            singleItemPrice = price/noOfItems;
        else
            singleItemPrice = currency === "USD" ? initialPrice : Number(priceInEuro);
       noOfItems = noOfItems + 1;
       price = currency === "USD" ? price + singleItemPrice : (price + singleItemPrice).toFixed(2);
       cartList = upDateList(objFromList, noOfItems, price );
       console.log("Cart After", cartList);
       localStorage.setItem("cartList",JSON.stringify(cartList));
       updateSubTotal();
    }

    const decrementPrice = objTobeDecremented => {
        let noOfItems = objTobeDecremented["quantity"];
        let priceOfItem = objTobeDecremented["price"];
        let currencyOfItem = objTobeDecremented["currency"];
        if(noOfItems < 1 ) return
        let singleItemPrice = priceOfItem/noOfItems;
        noOfItems = noOfItems > 0 ? noOfItems - 1: true; 
        priceOfItem = noOfItems !== true ? ( currencyOfItem === "USD" ? priceOfItem - singleItemPrice : Number((priceOfItem - singleItemPrice).toFixed(2))) 
        : true;
        cartList = upDateList(objTobeDecremented, noOfItems, priceOfItem );
        localStorage.setItem("cartList",JSON.stringify(cartList));
        updateSubTotal();
    }


    const renderCart = () => {
        if(cartList.length < 1)
            return <h2>Your cart is empty!!!</h2>
       return cartList.length > 0 && cartList !== null ? cartList.map((item, pos) => 
         (
            <Row className="base__orderCart" key={pos}>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="base__orderCart__container">
                        <div className="base__orderCart__div">
                            <img src={cart} alt="images" className="base__orderCart__div__img"/>
                            <div className="base__orderCart__div__subDiv">
                                <span className="base__orderCart__div__subDiv__span">{item.name}</span>
                                <span className="base__orderCart__div__subDiv__sizeSpan">{item.size}</span>
                            </div>
                        </div>
                        <div className="base__orderCart__count">
                            <div className="base__orderCart__count__quantityDiv"
                             style={{cursor:'pointer'}} onClick={() => decrementPrice(item)}>-</div>
                            <div className="base__orderCart__count__quantityDiv">
                                <span className="base__orderCart__count__quantityDiv__span">{item.quantity}</span>
                            </div>
                            <div className="base__orderCart__count__quantityDiv"
                            style={{cursor:'pointer'}} onClick={ () => handleIncrementPrice(item) }>+</div>
                                <span className="base__orderCart__count__quantityDiv__langDiv
                                base__orderCart__div__subDiv__span">
                                {item.currency === 'USD' ? `\u0024 ${item.price}` : `\u20AC ${item.price}`}</span>
                        </div>
                    </div>{/*base__orderCart__container ends here */}
                </Col>
            </Row>
        )) : []
    }
    
    return (
        <div>
             <SimpleBar style={{ height: '30rem', 'overflowX': 'hidden' }}>
                <Row className="base">
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} >
                        {renderCart()}
                    </Col>
                </Row>   
            </SimpleBar> 
            <div className="postCartContainer">
                <div className="postCartContainer__text">
                    <span className="postCartContainer__text__subtotal">SubTotal</span>
                    <span className="postCartContainer__text__subtotal">
                        {currencyBtnVal === 'USD' ? `\u0024 ${subtotal}` : `\u20AC ${subtotal}`}</span>
                </div>
                <div className="postCartContainer__btn">
                    <span className="postCartContainer__text__subtotal">
                        <Button variant="success" onClick={handleCurrency} value={currencyBtnVal}>
                            <span className="postCartContainer__text__subtotal__span">{currencyBtnlabel}</span>
                        </Button>
                    </span>
                    <span className="postCartContainer__text__subtotal">
                    <Link to={{pathname: `/pay`}} className="linkMain">
                        <Button variant="success">
                            <span className="postCartContainer__text__subtotal__span">CheckOut</span>
                        </Button>
                    </Link>  
                    </span>
                </div>
            </div> 
        </div>
    )
}

export default Cart;
