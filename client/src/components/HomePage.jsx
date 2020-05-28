import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col } from "react-bootstrap";
import * as actions from "../actions";
import homepage from "./assests/homepage.jpg";


const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(actions.fetchPizzaList());
    },[]);

    return (
        <div>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="home__col__img">
                    <img src={homepage} alt="images" className="homepage__image"/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="home__col__para">
                    <p>
                    Pizza  is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven.
                     A small pizza is sometimes called a pizzetta.In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced and eaten with the use of a knife and fork. In casual settings, however, it is cut into wedges to be eaten while held in the hand.
                     The term pizza was first recorded in the 10th century in a Latin manuscript from the Southern Italian town of Gaeta in Lazio, on the border with Campania.Modern pizza was invented in Naples, and the dish and its variants have since become popular in many countries. It has become one of the most popular foods in the world and a common fast food item in Europe and North America, available at pizzerias (restaurants specializing in pizza), restaurants offering Mediterranean cuisine, and via pizza delivery. 
                     Many companies sell ready-baked frozen pizzas to be reheated in an ordinary home oven.

                     In restaurants, pizza can be baked in an oven with stone bricks above the heat source, an electric deck oven, a conveyor belt oven, or, in the case of more expensive restaurants, a wood or coal-fired brick oven. On deck ovens, pizza can be slid into the oven on a long paddle, 
                     called a peel, and baked directly on the hot bricks or baked on a screen (a round metal grate, typically aluminum).
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default HomePage
