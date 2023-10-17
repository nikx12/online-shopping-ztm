import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shop-data.js';
// import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';


export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const [ categoriesMap, setCategoriesMap ] = useState({});

// added/ran only once so as to add data to firestore db from our code
//   useEffect(() => {
//     addCollectionAndDocuments('categories', SHOP_DATA);
//   }, []);

    useEffect(()=> {
        const getCategoriesMap = async() => {

            const categoryMap = await getCategoriesAndDocuments('categories');
            console.log(categoryMap);
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, []);
    const value = {categoriesMap};
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}
