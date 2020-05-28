import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import useCategoryList  from "./useCategoryList.jsx";
import RenderCategory from "./categoriesCardLayout/RenderCategory.jsx";
import * as actions from "../../../actions";

const NonvegPizza = (props) => {
    const dispatch = useDispatch();
    const { location } = props ;
    const [ categoryList, fetchCategoryList ] = useCategoryList(location, "NonVeg");

    useEffect(()=>{
        dispatch(actions.fetchPizzaList());
        fetchCategoryList();
    });
    return (
        <div>{ RenderCategory(categoryList) } </div> 
    )
}

export default NonvegPizza
