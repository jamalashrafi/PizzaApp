import {useState} from 'react';
import { useSelector } from 'react-redux';

 const useCategoryList = (initialProps, categoryName) => {
    const [categoryList, setcategoryList] = useState();
    const pizzaList = useSelector(state => state.menu.pizzaList);
    
    const fetchCategoryList = () => {
        let category = initialProps.query ? initialProps.query.category.Types : [];
        if(category.length > 0) {
            setcategoryList(category);
        }else {
            category = pizzaList.filter( item => item.Name === categoryName);
            category = category[0] !== undefined ? category[0] : [];
            setcategoryList(category.Types);
        }
    }
    return [ categoryList, fetchCategoryList];
}

export default useCategoryList;
