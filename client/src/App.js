import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import reduxThunk from "redux-thunk";
// import reducers from "./reducers";
import AboutUs from "./components/AboutUs.jsx";
import Beverages from "./components/menu/categories/Beverages.jsx";
import Cart from "./components/checkoutOrder/Cart.jsx";
import Checkout from "./components/checkoutOrder/Checkout.jsx";
import ContactUs from "./components/ContactUs.jsx";
import CheckoutContainer from "./components/checkoutOrder/CheckoutContainer.jsx";
import HomePage from "./components/HomePage.jsx";
import Menu from "./components/menu/Menu.jsx";
import NavBar from './components/NavBar.jsx';
import NonVeg from "./components/menu/categories/NonvegPizza.jsx";
import OrderedPizza from "./components/checkoutOrder/OrderedPizza.jsx";
import PizzaMania from "./components/menu/categories/PizzaMania.jsx";
import StoreLocator from "./components/StoreLocator.jsx";
import Veg from "./components/menu/categories/VegPizza.jsx"
import "./sass/main.scss";

const App = () => {
  return (
    <Router>
      <div>
          <NavBar />
          <Route path="/" exact component={ HomePage } />
          <Route path="/aboutus" exact component={ AboutUs } />
          <Route path="/beverages" exact component={ Beverages } />
          <Route path="/cart" exact component={ Cart } />
          <Route path="/pay" exact component={ Checkout } />
          <Route path="/contact" exact component={ ContactUs } />
          <Route path="/checkout" exact component={ CheckoutContainer } />
          <Route path="/menu" exact component={ Menu } />
          <Route path="/nonveg" exact component={ NonVeg } />
          <Route path="/orderpizza" exact component={ OrderedPizza } />
          <Route path="/pizzamania" exact component={ PizzaMania } />
          <Route path="/storelocator" exact component={ StoreLocator } />
          <Route path="/veg" exact component={ Veg } />
      </div>
    </Router>
  );
}

export default App;
