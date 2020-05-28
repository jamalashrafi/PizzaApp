import React, {useEffect, useState} from 'react'

const Checkout = () => {
    let subtotalObj;
    const [subtotal, setsubtotal] = useState(0);
    const [delivery, setdelivery] = useState(0);
    const [currency, setcurrency] = useState("USD");
    const [symbol, setsymbol] = useState("\u0024");
    
    useEffect(() => {
        subtotalObj = JSON.parse(localStorage.getItem('subtotal'));
        if(subtotalObj["currency"] === "USD" ){
            setdelivery(2);
            setsymbol("\u0024");
        }else{
            setdelivery(1.64);
            setsymbol("\u20AC");
        }
        setsubtotal(subtotalObj["subtotal"]);
        setcurrency(subtotalObj["currency"]);
    })
    return (
        <div>
            <div className="checkOutContainer">
                <h2>Final Amout is Subtotal {`${symbol} ${subtotal}`} + Delivery Charge {`${symbol} ${delivery}`} =
                    {currency === "USD" ? `  ${symbol} ${subtotal + delivery}` : ` ${symbol} ${(subtotal + delivery).toFixed(2)}`}
                </h2>
            </div>
        </div>
    )
}

export default Checkout
