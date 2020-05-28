import {useState} from 'react';

const useOrderManager = (itemCount, currencyVal, currencybtnVal, checkedItem) => {
    const cost = checkedItem['subCategory']['Price']['Regular'];
    const [price, setprice] = useState(cost);
    const [quantity, setquantity] = useState(itemCount);
    const [currency, setcurrency] = useState(currencyVal);
    const [currencybtn, setcurrencybtn] = useState(currencybtnVal);
    const [size, setsize] = useState("Regular");
    var initialPrice = checkedItem['subCategory']['Price']['Regular'];
    

    const handleCurrency = () => {
        if(currency === 'USD'){
            let priceInEuro = price * 0.92;
            let roundedPriceInEuro = Number(priceInEuro.toFixed(2));
            setcurrency('Euro');
            setcurrencybtn('USD');
            setprice(roundedPriceInEuro);
        }
        else{
            let priceInDollar = price / 0.92;
            let roundedPriceInDollar = Number(priceInDollar.toFixed(2));
            setcurrency('USD');
            setcurrencybtn('Euro');
            setprice(roundedPriceInDollar);
        }    
    }
    const incrementPrice = () => {
        let items = quantity;
        let singleItemPrice;
        let priceInEuro = (initialPrice * 0.92).toFixed(2);
        if(price > 0)
            singleItemPrice = price/items;
        else
            singleItemPrice = currency === "USD" ? initialPrice : Number(priceInEuro);
        setquantity(prevQuantity => prevQuantity + 1);
        setprice(prevPrice => Number((prevPrice + singleItemPrice).toFixed(2)));
    }

    const decrementPrice = () => {
        let items = quantity;
        let singleItemPrice = price/items;
        let result = quantity > 0 ? setquantity(prevQuantity => prevQuantity - 1): true;
        result = result !== true ? setprice(prevPrice => Number((prevPrice - singleItemPrice).toFixed(2))) : true;
    }

    const handleSize = (event) => {
        let amount = checkedItem['subCategory']['Price'][event.target.value];
        initialPrice = currency === "USD" ? amount : Number((amount* 0.92).toFixed(2));
        setprice(Number((initialPrice*quantity).toFixed(2)));
        setsize(event.target.value);
    }
   
   return [quantity, price, currency, currencybtn, size, handleCurrency, decrementPrice, incrementPrice, handleSize];
}

export default useOrderManager;
