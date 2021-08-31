import React from 'react';
import { useState, useEffect } from 'react';
import { getSearchesByForceDate } from '../utils/api';
import PieChart from '../charts/PieChart';
import BarChart from '../charts/BarChart';

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
            <PieChart pieData={searches}/>
            <BarChart barData={searches}/>
            <h1>Searches By Outcomes</h1>
            <ul>
                {searches.map(search=>{
                    return (
                        <li>{search.outcome}</li>
                    )
                }
                    )}
            </ul>
        </div>
    );
};

export default Statistics;