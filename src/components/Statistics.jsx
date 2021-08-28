import React from 'react';
import {useState,useEffect} from 'react';
import { getCategories } from '../utils/policeApi';

const Statistics = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        getCategories().then((categoriesFromApi)=>{
            setCategories(categoriesFromApi)
        })
    },[])

    return (
        <div>
           <h1>Crime levels overview</h1>
           <h3>categories</h3> 
           <ul>
            { categories.map((category)=>{
                     return(
                         <li key={category.url}>
                        ${category.name}
                         </li>
                       );
                 })
            } 
            </ul>


        </div>
    );
};

export default Statistics;