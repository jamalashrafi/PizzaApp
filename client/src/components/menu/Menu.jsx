import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from "react-bootstrap";
import * as actions from "../../actions";
import MenuCardLayout from "./menuCardLayout/MenuCardLayout.jsx";

const Menu = (props) => {
    const dispatch = useDispatch();
    const pizzaList = useSelector(state => state.menu.pizzaList);

    useEffect(()=>{
         dispatch(actions.fetchPizzaList());
    },[]);

    const renderComp = () => {
        if(pizzaList.length < 1)
             return <h1 style={{'marginLeft': '40%', 'marginTop': "10%"}}>Loading !!!</h1>
        return pizzaList !== undefined ? pizzaList.map( (i,j) => ( 
              <Col xs={12} sm={6} md={6} lg={4} xl={3} className="orderSection" key={j}>
                  <MenuCardLayout category={i}/>
               </Col>
             )) : [];
     }

    return (
        <div>
             <Row>
                { renderComp() }
            </Row>
        
        </div>
    )
}

export default Menu;
