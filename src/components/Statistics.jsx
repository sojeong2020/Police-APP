import React from 'react';
import { useState, useEffect } from 'react';
import { getSearchesByForceDate } from '../utils/api';


const Statistics = ({force,date}) => {
    const[searches,setSearches] = useState([]);
    console.log(force,"<<<< from statistics")
    console.log(date,"<<<< from statistics")
    console.log(searches,"<<<< from statistics")

    useEffect(()=>{
        getSearchesByForceDate(force.value,date.value).then((resultFromApi)=>{
      
            setSearches(resultFromApi)
        })
      },[force,date])

    return (
        <div>
            <h1>Searches By Outcomes</h1>
        </div>
    );
};

export default Statistics;